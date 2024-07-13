/**
 * Renders the root layout component with a background image and children.
 *
 * This component wraps all other components, so it is a good place to put global styles
 * and layout elements.
 *
 * @param {Object} props - The properties for the root layout.
 * @param {React.ReactNode} props.children - The child components to render.
 * @return {JSX.Element} The root layout component.
 */
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const backgroundImage = await import("/images/bg-img.png");

  return (
    <main className="relative h-screen w-full">
      <div className="absolute inset-0">
      </div>
      {children}
    </main>
  );
}
