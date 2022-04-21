export default function Card({ children, className, ...props }) {
  return (
    <div {...props} className={`${className} p-4 bg-sky-100 border border-sky-900 rounded-xl drop-shadow`}>
      {children}
    </div>
  );
}
