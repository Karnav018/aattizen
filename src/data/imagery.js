// Centralised telecom-themed imagery (Unsplash CDN; replace with client photography later).
// Each entry is keyed by purpose so we can swap a single source globally.

const u = (id, w = 1920) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const imagery = {
  // Hero: client-supplied photo of blue patch cables — strong brand-blue
  // saturation, fits the navy palette and reads telecom-first.
  hero: "/images/hero-network-cables.jpg",
  // About / data centre — server racks bathed in blue light.
  dataCentre: u("photo-1558494949-ef010cbdcc31", 1600),
  // Service detail backgrounds — each fits one product.
  services: {
    ill: u("photo-1486325212027-8081e485255e", 1400),
    p2p: u("photo-1551808525-51a94da548ce", 1400),
    ddos: u("photo-1614064548237-02f2bb83f8e5", 1400),
    sdwan: u("photo-1518770660439-4636190af475", 1400),
  },
  // Decorative band on home page — abstract 3D network mesh on a grid floor.
  fibreBand: "/images/network-mesh.jpg",
  // NOC operators / control room.
  noc: u("photo-1551808525-51a94da548ce", 1400),
};
