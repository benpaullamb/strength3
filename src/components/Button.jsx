export default function Button({ children, className, ...props }) {
  return (
    <button {...props} className={`${className} px-6 py-2 bg-white rounded-3xl drop-shadow`}>
      {children}
    </button>
  );
}
