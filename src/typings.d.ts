// typings.d.ts

interface Window {
  FB?: {
    ui: (params: any, callback: (response: any) => void) => void;
    // Additional methods and properties of the FB object can be added as needed
  };
}
  