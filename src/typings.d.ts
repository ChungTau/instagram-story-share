// typings.d.ts

interface Window {
    FB?: {
      ui: (params: any, callback: (response: any) => void) => void;
      // You can add other methods and properties of the FB object here as needed
    };
  }
  