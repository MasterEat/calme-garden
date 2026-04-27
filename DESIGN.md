---
name: Calme Garden
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#43493e'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#73796d'
  outline-variant: '#c3c8bb'
  surface-tint: '#446733'
  primary: '#173809'
  on-primary: '#ffffff'
  primary-container: '#2d4f1e'
  on-primary-container: '#98c083'
  inverse-primary: '#a9d293'
  secondary: '#496800'
  on-secondary: '#ffffff'
  secondary-container: '#c8f17a'
  on-secondary-container: '#4e6e00'
  tertiary: '#303221'
  on-tertiary: '#ffffff'
  tertiary-container: '#474836'
  on-tertiary-container: '#b6b7a0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5efad'
  primary-fixed-dim: '#a9d293'
  on-primary-fixed: '#062100'
  on-primary-fixed-variant: '#2d4f1e'
  secondary-fixed: '#c8f17a'
  secondary-fixed-dim: '#add461'
  on-secondary-fixed: '#131f00'
  on-secondary-fixed-variant: '#364e00'
  tertiary-fixed: '#e4e4cc'
  tertiary-fixed-dim: '#c8c8b0'
  on-tertiary-fixed: '#1b1d0e'
  on-tertiary-fixed-variant: '#474836'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: manrope
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: manrope
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: manrope
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: newsreader
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: newsreader
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 24px
  margin: max(5vw, 24px)
---

## Brand & Style
The design system is rooted in the concept of "Biophilic Minimalism." It seeks to bridge the gap between high-end architectural precision and the raw, soothing unpredictability of nature. The target audience is looking for sanctuary and restoration; therefore, the UI must feel like a deep breath—expensive but understated, warm but organized.

The aesthetic blends **Minimalism** with **Tactile** influences. We prioritize negative space (breathing room) to reduce cognitive load, while using organic, rounded geometry to mimic the natural world. This design system avoids sharp corners and clinical whites in favor of soft, light-soaked surfaces that evoke a sun-drenched garden.

## Colors
The palette is a sophisticated "Evergreen & Earth" harmony. 
- **Deep Green (#2D4F1E)** is used for high-contrast elements, primary actions, and typography to ensure accessibility and a sense of grounded authority. 
- **Olive Green (#6B8E23)** serves as a secondary accent for highlights, iconography, and subtle calls to action.
- **Soft Beige (#F5F5DC)** and **Warm Off-White (#FAFAFA)** form the foundation of the UI, creating a soft, paper-like canvas that is easier on the eyes than pure white.
- A **Subtle Earth Tone (#A67B5B)** is introduced as a tertiary accent to represent wood and soil, providing warmth to interactive states.

## Typography
This design system employs a pairing of a modern sans-serif and a literary serif to achieve a "Premium Editorial" feel.

**Manrope** is used for headings and navigational labels. Its geometric yet friendly structure provides clarity and a contemporary edge. For primary headlines, use a tighter letter-spacing to maintain a sophisticated silhouette.

**Newsreader** is used for all body text. As a serif designed for readability, it brings a sense of tradition, storytelling, and warmth to the garden narrative. It should always be set with generous line-height to ensure the text "breathes" as much as the layout.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop to maintain an intentional, gallery-like presentation, transitioning to a fluid model for mobile. 

A 12-column grid is used with a generous 24px gutter. The "Breathing Space" principle is paramount: vertical margins between sections should rarely be less than `xl` (64px). Elements are often inset with wide padding to create a "contained" feeling, like a walled garden. Alignment should feel balanced but not rigid—don't be afraid of asymmetrical white space to direct the eye.

## Elevation & Depth
Depth in the design system is achieved through **Ambient Shadows** and **Tonal Layers** rather than heavy gradients. 

Surfaces should feel like they are floating slightly above the warm beige background. Shadows are diffused, using a low-opacity Deep Green tint (#2D4F1E at 8-12% alpha) instead of pure black to keep the palette organic. 

We use a "Layered Vellum" approach:
1. **Base:** Warm Off-White (#FAFAFA).
2. **Container:** Soft Beige (#F5F5DC) with a very soft, large-radius shadow.
3. **Overlay:** Pure white for high-importance interactions (modals/tooltips), creating a crisp, clean focal point.

## Shapes
The shape language is "Organic Geometric." While we utilize a standard `0.5rem` to `1.5rem` radius for most UI components, the design system encourages the use of **Large Organic Shapes** (blobs or leaf-like arcs) for background containers and image masks. 

Interactive elements like buttons and chips should feel "pebble-like"—smooth and inviting to the touch. Avoid any sharp 90-degree angles unless they are used for structural grid dividers.

## Components
### Buttons
Primary buttons are solid Deep Green with white Manrope text, featuring a high corner radius. Secondary buttons use an Olive Green outline or a Soft Beige fill.

### Cards
Cards use the Soft Beige background with a subtle Deep Green tinted shadow. Padding inside cards must be generous (at least 24px) to avoid visual clutter.

### Inputs
Fields are rendered with a simple bottom-border or a very light Olive Green stroke. The focus state uses a soft glow rather than a harsh border change.

### Floral Motifs
The "Lotus" logo should be used sparingly as a watermark or a divider element. Leaf-patterned SVG separators can be used to break up long vertical scrolls, providing a tactile, "hand-drawn" quality to the digital experience.

### Imagery
Photos should feature natural lighting, soft focus backgrounds, and a slightly warm color temperature to match the beige/off-white UI foundation.