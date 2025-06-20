=== Narahosting WordPress Theme ===
Contributors:      The WordPress Contributors
Tags:              custom-blocks, gaming, hosting, theme
Tested up to:      6.7
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A modern WordPress theme with custom blocks designed for gaming and hosting content, featuring a comprehensive set of reusable components.

== Description ==

The Narahosting WordPress Theme is a custom-built theme specifically designed for gaming and hosting content. Based in Jokkmokk, SE, this theme provides a complete solution for creating gaming-focused websites with insightful game reviews, patch notes, and hosting tips.

## Features

### Custom Blocks
The theme includes 7 custom blocks built with WordPress Block Editor:

1. **MyHeader Block** - Custom header with navigation and branding
2. **MyFooter Block** - Custom footer component
3. **Narahosting CTA Block** - Call-to-action block with customizable content
4. **Narahosting Hero Block** - Hero section with background image, title, subtitle, and button
5. **Narahosting Latest Posts** - Displays recent blog posts
6. **Narahosting Code Block** - Code display block for technical content
7. **Narahosting Contact Form** - SMTP mail configuration block

### Design System
- **Color Palette**: Primary (#F87060), Secondary (#46455E), Accent Dark (#595959), Accent Light (#FFF)
- **Typography**: Poppins font family with responsive sizing
- **Layout**: Grid-based responsive design with mobile-first approach
- **Breakpoints**: Tablet breakpoint at 925px

### Templates
- **Index Template**: Clean homepage layout with header and post content
- **Single Template**: Three-column layout for individual posts with featured images

## Technology Stack
- **WordPress**: Core CMS platform
- **Block Editor**: Modern Gutenberg blocks
- **SCSS**: Advanced CSS preprocessing
- **Webpack**: Asset bundling and optimization
- **Node.js**: Development environment

== Installation ==

### Prerequisites
- WordPress 6.7 or higher
- Node.js and npm installed
- PHP 7.4 or higher

### Installation Steps

1. **Upload Theme Files**
   - Upload the theme folder to `/wp-content/themes/narahostingtheme/`
   - Or install through WordPress admin → Appearance → Themes → Add New

2. **Activate Theme**
   - Go to WordPress admin → Appearance → Themes
   - Activate "Narahosting Theme"

3. **Install Dependencies**
   ```bash
   cd /wp-content/themes/narahostingtheme
   npm install
   ```

4. **Build Assets**
   ```bash
   npm run build
   ```

== Development ==

### Available Scripts

- `npm run build` - Build all blocks and assets for production
- `npm run start` - Start development server with hot reloading
- `npm run format` - Format code using WordPress coding standards
- `npm run lint:css` - Lint SCSS files
- `npm run lint:js` - Lint JavaScript files
- `npm run packages-update` - Update WordPress packages
- `npm run plugin-zip` - Create a distributable zip file

### Project Structure

```
narahostingtheme/
├── src/                          # Source files for custom blocks
│   ├── myheader/                 # Header block
│   ├── myfooter/                 # Footer block
│   ├── narahostingCta/           # Call-to-action block
│   ├── narahostingHeroBlock/     # Hero section block
│   ├── narahostingLatestPosts/   # Latest posts block
│   ├── narahostingCodeBlock/     # Code display block
│   └── narahostingContactForm/   # Contact form block
├── build/                        # Compiled assets
├── templates/                    # Block templates
├── functions.php                 # Theme functions
├── style.scss                    # Global styles
├── theme.json                    # Theme configuration
└── package.json                  # Dependencies and scripts
```

### Block Development

Each custom block follows the WordPress block structure:
- `block.json` - Block configuration and metadata
- `index.js` - Block registration
- `edit.js` - Editor component
- `save.js` or `render.php` - Frontend rendering
- `style.scss` - Block styles
- `editor.scss` - Editor-specific styles
- `view.js` - Frontend JavaScript

== Customization ==

### Colors
The theme uses SCSS variables for easy color customization:
```scss
$primary-color: #F87060;
$secondary-color: #46455E;
$accent-dark-color: #595959;
$accent-light-color: #FFF;
```

### Typography
Font sizes are defined as variables:
```scss
$font-xxl: 71px;
$font-xl: 33px;
$font-large: 27px;
$font-xm: 22px;
$font-medium: 20px;
$font-sm: 18px;
```

### Layout
The theme uses CSS Grid for responsive layouts with a mobile-first approach. The main container uses a 23% margin on desktop and switches to full-width on mobile.

== Frequently Asked Questions ==

= How do I add a new custom block? =

1. Create a new directory in the `src/` folder
2. Add the required files (block.json, index.js, edit.js, etc.)
3. Register the block in `functions.php`
4. Run `npm run build` to compile

= How do I customize the theme colors? =

Edit the SCSS variables in `style.scss` and rebuild the assets using `npm run build`.

= Is this theme compatible with page builders? =

This theme is designed to work with the WordPress Block Editor (Gutenberg). While it may work with page builders, it's optimized for the native block editor experience.

= How do I update the theme? =

1. Backup your current theme
2. Upload the new version
3. Run `npm install` to update dependencies
4. Run `npm run build` to rebuild assets

== Screenshots ==

1. Homepage with custom header and hero block
2. Single post layout with three-column design
3. Custom blocks in the WordPress editor
4. Mobile responsive design

== Changelog ==

= 0.1.0 =
* Initial release
* 7 custom blocks implemented
* Responsive design system
* SCSS-based styling
* WordPress 6.7 compatibility

== Support ==

For support and questions:
- Check the WordPress.org theme directory
- Review the documentation in this README
- Ensure all dependencies are properly installed

== License ==

This theme is licensed under the GPL v2 or later.

== Credits ==

- Built with WordPress Block Editor
- Styled with SCSS
- Icons from WordPress Dashicons
- Fonts: Poppins (Google Fonts)