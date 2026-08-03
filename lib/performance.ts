export const isMobile = () =>
  typeof window !== "undefined" && window.innerWidth < 768;

export const isSlowConnection = () => {
  if (typeof navigator === "undefined") return false;

  const connection = (navigator as any).connection;

  if (!connection) return false;

  return (
    connection.saveData ||
    connection.effectiveType === "2g" ||
    connection.effectiveType === "slow-2g"
  );
};

export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;

  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
};

export function preloadImage(src: string) {
  if (typeof document === "undefined") return;

  const link = document.createElement("link");

  link.rel = "preload";
  link.as = "image";
  link.href = src;

  document.head.appendChild(link);
}

export function preloadFont(
  href: string,
  type = "font/woff2"
) {
  if (typeof document === "undefined") return;

  const link = document.createElement("link");

  link.rel = "preload";
  link.href = href;
  link.as = "font";
  link.type = type;
  link.crossOrigin = "anonymous";

  document.head.appendChild(link);
}

export function dnsPrefetch(url: string) {
  if (typeof document === "undefined") return;

  const link = document.createElement("link");

  link.rel = "dns-prefetch";
  link.href = url;

  document.head.appendChild(link);
}

export function preconnect(url: string) {
  if (typeof document === "undefined") return;

  const link = document.createElement("link");

  link.rel = "preconnect";
  link.href = url;
  link.crossOrigin = "anonymous";

  document.head.appendChild(link);
}

export function runIdle(callback: () => void) {
  if (typeof window === "undefined") return;

  if ("requestIdleCallback" in window) {
    (window as any).requestIdleCallback(callback);
  } else {
    setTimeout(callback, 1);
  }
}

export function optimizeImages() {
  if (typeof document === "undefined") return;

  document.querySelectorAll("img").forEach((img) => {
    img.loading = "lazy";
    img.decoding = "async";
  });
}

export function optimizeAnimations() {
  if (typeof document === "undefined") return;

  document
    .querySelectorAll(".float,.orbit,.orbit-reverse")
    .forEach((el) => {
      (el as HTMLElement).style.willChange =
        "transform";
    });
}

export function optimizeScroll() {
  if (typeof window === "undefined") return;

  window.addEventListener(
    "scroll",
    () => {},
    {
      passive: true,
    }
  );
}

export function optimizeIntersection() {
  if (typeof window === "undefined") return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "section-visible"
          );
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  document
    .querySelectorAll("[data-reveal]")
    .forEach((el) => observer.observe(el));
}

export function optimizeContentVisibility() {
  if (typeof document === "undefined") return;

  document
    .querySelectorAll("section")
    .forEach((section) => {
      const el = section as HTMLElement;

      el.style.contentVisibility = "auto";
      el.style.containIntrinsicSize = "1000px";
    });
}

export function optimizeResourceHints() {
  preconnect("https://fonts.gstatic.com");
  preconnect("https://fonts.googleapis.com");

  dnsPrefetch("https://fonts.gstatic.com");
  dnsPrefetch("https://fonts.googleapis.com");
}

export function optimizeEverything() {
  runIdle(() => {
    optimizeImages();

    optimizeAnimations();

    optimizeScroll();

    optimizeIntersection();

    optimizeContentVisibility();

    optimizeResourceHints();
  });
}