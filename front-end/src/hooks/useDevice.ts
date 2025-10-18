import { useEffect, useState } from "react";

type Device = "mobile" | "tablet" | "desktop";

export function useDevice(): Device {
  const [device, setDevice] = useState<Device>("desktop");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipod/i.test(ua)) setDevice("mobile");
    else if (/tablet|ipad/i.test(ua)) setDevice("tablet");
    else setDevice("desktop");
  }, []);

  return device;
}
