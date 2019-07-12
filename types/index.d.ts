declare module 'react-jsonschema-form/lib/utils' {
  export function parseDateString(
    dateString: string,
    includeTime: boolean
  ): any;

  export function toDateString(obj: any, time: boolean): any;

  export function pad(num: number, size: number): string;
}
