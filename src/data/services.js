// Service portfolio — sourced from the 2026 Aattizen Service Brochure.
// Each service drives both the home-page summary card and its detail page.

export const services = [
  {
    slug: "internet-leased-line",
    code: "01",
    short: "ILL",
    title: "Internet Leased Line",
    tagline: "Dedicated Internet, Not Shared.",
    icon: "router",
    accent: "primary",
    summary:
      "Dedicated, symmetric, SLA-backed internet with public IPv4/IPv6, BGP, and 99.5% uptime.",
    hero:
      "A port-to-port circuit between your premises and our core — with 1:1 symmetric throughput, public IP allocation, and an enforceable Service Level Agreement. No contention, no throttling, no surprises.",
    bullets: ["Scalable to 10 Gbps+", "Direct Peering", "Public IPv4/IPv6"],
    capabilities: [
      {
        icon: "all_inclusive",
        title: "1:1 Symmetric Bandwidth",
        body: "Equal upload and download — no overcommit, no contention ratio.",
      },
      {
        icon: "bolt",
        title: "Bandwidth on Demand",
        body: "Burst or scale your link in hours, not weeks. Pay only for what you provision.",
      },
      {
        icon: "dns",
        title: "Multi Tier-1 Upstream",
        body: "100% redundant backbone via diverse Tier-1 providers and routes.",
      },
      {
        icon: "language",
        title: "IPv4 + IPv6 Allocation",
        body: "Public addressing as standard. BGP/AS handover available on request.",
      },
      {
        icon: "monitoring",
        title: "Real-Time Usage Portal",
        body: "Live throughput graphs, latency, and uptime dashboards 24×7.",
      },
      {
        icon: "support_agent",
        title: "Direct-to-Engineer Support",
        body: "Single hop to a NOC engineer. Proactive monitoring and incident push.",
      },
    ],
    metrics: [
      { value: "99.5%", label: "Network Uptime" },
      { value: "< 4 hrs", label: "MTTR Target" },
      { value: "24×7", label: "NOC Coverage" },
      { value: "< 50ms", label: "Domestic Latency" },
    ],
  },
  {
    slug: "point-to-point",
    code: "02",
    short: "P2P",
    title: "Point-to-Point Connectivity",
    tagline: "Your Sites, Privately Linked.",
    icon: "settings_ethernet",
    accent: "primary",
    summary:
      "Private layer-2 transport between sites — DC-to-DC, branch interconnect, DR replication.",
    hero:
      "A dedicated layer-2 circuit between two locations — no public routing, no internet exposure. Ideal for data-centre interconnect, branch-to-HQ links, DR replication, and storage extension over metro or long-haul distances.",
    bullets: [
      "Pure L2 transparency — VLAN, MAC, EtherType pass through end-to-end",
      "Symmetric capacities 10 Mbps to 10 Gbps on the same handover",
      "Sub-5 ms metro latency; predictable long-haul performance",
      "Optional MACsec / IPsec encryption for regulated workloads",
      "Single-NOC ownership — one ticket, one resolution",
    ],
    capabilities: [
      {
        icon: "dns",
        title: "Data Centre Interconnect",
        body: "DC-to-DC replication, storage mirroring, active-active clusters.",
      },
      {
        icon: "account_tree",
        title: "Branch-to-HQ Backbone",
        body: "Transparent extension of corporate LAN across cities.",
      },
      {
        icon: "sync_alt",
        title: "DR & Backup Replication",
        body: "Low-latency, dedicated path for RPO-critical workloads.",
      },
      {
        icon: "cloud",
        title: "Cloud On-Ramp",
        body: "Private uplink to colocation or hyperscaler edge nodes.",
      },
    ],
    metrics: [
      { value: "10G", label: "Max Capacity" },
      { value: "< 5ms", label: "Metro Latency" },
      { value: "L2", label: "Pure Transparent" },
      { value: "99.5%", label: "Circuit SLA" },
    ],
  },
  {
    slug: "ddos-protection",
    code: "03",
    short: "DDoS",
    title: "DDoS Protection",
    tagline: "Stay Online. Under Any Load.",
    icon: "shield",
    accent: "error",
    summary:
      "Multi-layer defence against volumetric, protocol, and application-layer attacks.",
    hero:
      "Cloud-scrubbed mitigation that absorbs volumetric floods, neutralises protocol exploits, and filters application-layer abuse — with always-on or on-demand modes, and protection that follows the IP, not the link.",
    bullets: [
      "Tbps-scale upstream scrubbing",
      "On-Net, Cloud Extension, or hybrid",
      "Always-On or On-Demand activation",
      "Per-IP or full /24 coverage",
    ],
    vectors: [
      {
        title: "Volumetric",
        tag: "L3 / 4",
        accent: "red",
        attacks: ["UDP floods", "ICMP floods", "Amplification (DNS, NTP, Memcached)"],
        defence:
          "Upstream scrubbing absorbs Tbps-scale traffic before it reaches your circuit.",
      },
      {
        title: "Protocol",
        tag: "L3 / 4",
        accent: "amber",
        attacks: ["SYN floods", "ACK / RST floods", "Fragmented packet attacks"],
        defence:
          "Stateful inspection and SYN cookies neutralise exhaustion attacks at line rate.",
      },
      {
        title: "Application",
        tag: "L7",
        accent: "blue",
        attacks: ["HTTP floods", "Slowloris / R-U-Dead-Yet", "DNS query floods"],
        defence:
          "Behavioural analysis and rate-shaping isolate malicious clients from real users.",
      },
    ],
    metrics: [
      { value: "Tbps", label: "Scrubbing Capacity" },
      { value: "Always-On", label: "Or On-Demand" },
      { value: "/24", label: "Per-IP or Full Block" },
      { value: "Any ISP", label: "Cloud Extension" },
    ],
  },
  {
    slug: "sd-wan",
    code: "04",
    short: "SD-WAN",
    title: "SD-WAN",
    tagline: "One Fabric. Every Branch.",
    icon: "hub",
    accent: "emerald",
    summary:
      "Centralised, app-aware routing across MPLS, broadband, and 4G/5G with built-in security.",
    hero:
      "Replace expensive single-link WANs with an intelligent overlay across MPLS, broadband, and 4G/5G. Application-aware path selection, centralised policy, and built-in security — managed end-to-end by Aattizen.",
    bullets: [
      "30-60% lower WAN TCO",
      "5× faster turn-up",
      "< 1s failover",
      "100% encrypted overlay",
    ],
    capabilities: [
      {
        icon: "settings",
        title: "Centralised Orchestration",
        body: "Single-pane control of policy, routing, and security — push changes globally in minutes.",
      },
      {
        icon: "alt_route",
        title: "App-Aware Path Selection",
        body: "Live measurement of jitter, loss and latency steers each app down the best link.",
      },
      {
        icon: "layers",
        title: "Multi-Link Bonding",
        body: "Aggregate MPLS, broadband, and 4G/5G into one resilient overlay with sub-second failover.",
      },
      {
        icon: "lock",
        title: "Built-in Security",
        body: "IPsec encryption end-to-end, plus optional NGFW, IDS/IPS, and segmentation per VRF.",
      },
      {
        icon: "visibility",
        title: "Deep Visibility",
        body: "Per-application telemetry, link health, and user-experience analytics in real time.",
      },
      {
        icon: "cloud",
        title: "Cloud On-Ramp",
        body: "Direct, optimised paths to SaaS & IaaS — bypass backhaul for M365, AWS, Azure.",
      },
    ],
    metrics: [
      { value: "30-60%", label: "Lower WAN TCO" },
      { value: "5×", label: "Faster Turn-Up" },
      { value: "< 1s", label: "Failover Time" },
      { value: "100%", label: "Encrypted" },
    ],
  },
];

export const whyAattizen = [
  {
    icon: "groups",
    title: "Direct-to-Engineer Support",
    body: "No call-tree triage. Your ticket lands with a NOC engineer who can fix it.",
  },
  {
    icon: "verified",
    title: "SLA That Pays Out",
    body: "99.5% uptime is contractual, with credits if we miss. We monitor it before you do.",
  },
  {
    icon: "schedule",
    title: "Bandwidth on Demand",
    body: "Burst capacity in hours, not weeks. Scale up for peaks, scale back next day.",
  },
  {
    icon: "shield",
    title: "Security-First Network",
    body: "DDoS scrubbing, encrypted overlays, and segmentation are built in — not bolted on.",
  },
  {
    icon: "public",
    title: "Multi-Tier-1 Backbone",
    body: "Diverse upstream and route diversity protect you from single-provider blast radius.",
  },
  {
    icon: "vpn_key",
    title: "Single Throat to Choke",
    body: "ILL, P2P, DDoS, and SD-WAN under one contract, one portal, one SLA.",
  },
];
