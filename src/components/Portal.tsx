import { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  rootId?: string;
}

const Portal = ({ children, rootId = 'portal-root' }: PortalProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let portalRoot = document.getElementById(rootId);
    
    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.id = rootId;
      document.body.appendChild(portalRoot);
    }

    const element = document.createElement('div');
    elementRef.current = element;
    portalRoot.appendChild(element);

    return () => {
      if (element) {
        portalRoot?.removeChild(element);
      }
      if (portalRoot?.childNodes.length === 0) {
        portalRoot.remove();
      }
    };
  }, [rootId]);

  if (!elementRef.current) {
    return null;
  }

  return createPortal(children, elementRef.current);
};

export default Portal;