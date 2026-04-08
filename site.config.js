/**
 * Site Configuration — Runtime Branding
 * 
 * This file is loaded synchronously via <script> in index.html BEFORE the app bundle.
 * It allows the same build to be deployed for multiple owners by simply swapping this file.
 * 
 * To rebrand for a new owner:
 * 1. Edit this file (siteName, siteOwner, siteTagline)
 * 2. Replace /branding/logo.webp with the owner's logo
 * 3. Replace /favicon.ico with the owner's favicon
 * 4. Deploy — no rebuild needed
 */
window.SITE_CONFIG = {
  siteName: "Alumni Portal",
  siteOwner: "Alumni Portal",
  siteTagline: "Connecting Navodayans!",
  siteLogo: "/branding/logo.webp",
};
