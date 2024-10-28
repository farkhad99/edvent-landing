'use client';

import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { CircleX as CloseIcon, SaveIcon, UploadIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

// Type definitions
export type TextConstructor = {
  type: 'text';
  path: string;
  initialValue?: string;
  label?: string;
};

export type ImageConstructor = {
  type: 'image';
  fileName: string;
  initialValue?: string;
  label?: string;
};

export type FormConstructor = TextConstructor | ImageConstructor;

interface EditFormProps {
  constructors: FormConstructor[];
  onClose?: () => void;
}

export default function EditForm({ constructors, onClose }: EditFormProps) {
  // Track loading state for each field
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );

  const t = useTranslations();
  // Track form values
  const [formValues, setFormValues] = useState<Record<string, string>>(() => {
    const initialValues: Record<string, string> = {};
    constructors.forEach((constructor) => {
      const key =
        constructor.type === 'text' ? constructor.path : constructor.fileName;
      initialValues[key] =
        constructor.type === 'text'
          ? t(constructor.path as any)
          : constructor.fileName;
    });
    return initialValues;
  });

  // Handle text input changes
  const handleTextChange = (path: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [path]: value
    }));
  };

  // Handle text save
  const handleTextSave = async (constructor: TextConstructor) => {
    setLoadingStates((prev) => ({ ...prev, [constructor.path]: true }));
    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch('/api/update-locale', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          path: constructor.path,
          value: formValues[constructor.path]
        })
      });

      if (!response.ok) throw new Error('Failed to update text');
    } catch (error) {
      console.error('Error saving text:', error);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [constructor.path]: false }));
    }
  };

  // Handle file upload
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    constructor: ImageConstructor
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoadingStates((prev) => ({ ...prev, [constructor.fileName]: true }));

    try {
      const formData = new FormData();
      formData.append('file', file);

      const token = localStorage.getItem('adminToken');
      const response = await fetch(
        `/api/replace-file?filename=${constructor.fileName}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData
        }
      );

      if (!response.ok) throw new Error('Failed to upload image');

      // Update the preview
      setFormValues((prev) => ({
        ...prev,
        [constructor.fileName]: URL.createObjectURL(file)
      }));
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [constructor.fileName]: false }));
    }
  };

  const renderField = (constructor: FormConstructor) => {
    switch (constructor.type) {
      case 'text':
        return (
          <Paper
            elevation={0}
            sx={{ p: 2, mb: 2, border: '1px solid', borderColor: 'divider' }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <TextField
                fullWidth
                label={constructor.label || 'Text Value'}
                value={formValues[constructor.path]}
                onChange={(e) =>
                  handleTextChange(constructor.path, e.target.value)
                }
                variant="outlined"
                size="small"
              />
              <Button
                variant="contained"
                onClick={() => handleTextSave(constructor)}
                disabled={loadingStates[constructor.path]}
                startIcon={
                  loadingStates[constructor.path] ? (
                    <CircularProgress size={20} />
                  ) : (
                    <SaveIcon color="#000" />
                  )
                }
              >
                <span className="pt-1 font-bold text-black hover:text-white">
                  Save
                </span>
              </Button>
            </Stack>
            <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>
              Path: {constructor.path}
            </Typography>
          </Paper>
        );

      case 'image':
        return (
          <Paper
            elevation={0}
            sx={{ p: 2, mb: 2, border: '1px solid', borderColor: 'divider' }}
          >
            <Stack spacing={2}>
              <Typography variant="subtitle2">
                {constructor.label || 'Image Upload'}
              </Typography>

              {formValues[constructor.fileName] && (
                <Box
                  component="img"
                  src={formValues[constructor.fileName]}
                  alt="Preview"
                  sx={{
                    maxWidth: 200,
                    maxHeight: 200,
                    objectFit: 'contain',
                    borderRadius: 1
                  }}
                />
              )}

              <Stack direction="row" spacing={2} alignItems="center">
                <Button
                  variant="outlined"
                  component="label"
                  disabled={loadingStates[constructor.fileName]}
                  startIcon={
                    loadingStates[constructor.fileName] ? (
                      <CircularProgress size={20} />
                    ) : (
                      <UploadIcon />
                    )
                  }
                >
                  Upload New Image
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, constructor)}
                  />
                </Button>
                <Typography variant="caption" color="textSecondary">
                  {constructor.fileName}
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {onClose && (
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: -5, top: -50 }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      )}

      <Box sx={{ mt: 1 }}>
        {constructors.map((constructor) => (
          <Box key={`${constructor.type}`}>{renderField(constructor)}</Box>
        ))}
      </Box>
      <Button
        className="bg-primary w-full text-black hover:text-white"
        variant="contained"
        color="success"
        type="submit"
        onClick={() => window.location.reload()}
      >
        Done
      </Button>
    </Box>
  );
}
