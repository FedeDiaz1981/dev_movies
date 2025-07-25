/**
 * Navbar Component
 *
 * This component renders the top navigation bar of the application.
 *
 * Features:
 * - Displays the application name "DEV Movies".
 * - Uses TailwindCSS for styling:
 *   - Blue background (`bg-blue-600`)
 *   - White text
 *   - Shadow for depth
 *   - Sticky positioning at the top of the page
 *   - Responsive horizontal padding and vertical spacing
 *
 * This component does not contain navigation links but can be extended
 * to include menu items or user interactions if needed.
 */

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-wide">
          <span className="font-light">DEV</span>
          <span className="font-bold text-white">Movies</span>
        </h1>
      </div>
    </nav>
  );
}
