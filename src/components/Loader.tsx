const Loader = (props: { color?: string }) => {
  return (
    <div className="flex items-center justify-center space-x-2 bg-white">
      <span className="sr-only">Loading...</span>
      <div
        className={`bg- size-6${props.color ?? 'black'} animate-bounce rounded-full [animation-delay:-0.3s]`}
      />
      <div
        className={`bg- size-6${props.color ?? 'black'} animate-bounce rounded-full [animation-delay:-0.15s]`}
      />
      <div
        className={`bg- size-6${props.color ?? 'black'} animate-bounce rounded-full`}
      />
    </div>
  );
};

export { Loader };
