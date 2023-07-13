
export enum InViewportConfigDirection {
  BOTH = 'both',
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}

export interface InViewportConfigCheckFnOptions {
  force: boolean;
  config: InViewportConfig;
}

export type InViewportConfigCheckFn = (
  entry: IntersectionObserverEntry,
  options: InViewportConfigCheckFnOptions
) => any;

export interface InViewportConfigOptions {
  root?: Element;
  rootMargin?: string;
  threshold?: number | number[];
  partial?: boolean;
  direction?: InViewportConfigDirection;
  checkFn?: InViewportConfigCheckFn;
}

export function isPlatformBrowser() {
  try {
    return typeof window !== 'undefined' && this === window;
  } catch (e) {
    return false;
  }
}

export function toBase64(input: string): string {
  return !isPlatformBrowser()
    ? toBase64Node(input)
    : toBase64Browser(input);
}

export function toBase64Node(input: string): string {
  try {
    return typeof global !== 'undefined' && global.Buffer.from(input).toString('base64');
  } catch (e) {
    return input;
  }
}

export function toBase64Browser(input: string): string {
  try {
    return typeof window !== 'undefined' && window.btoa(input);
  } catch (e) {
    return input;
  }
}

export class InViewportConfig {
  private static readonly DEFAULT_THRESHOLD = [0, 1];

  private static readonly STRINGIFY_DELIMITER = '|';

  private configRoot: Element;
  private configRootMargin = '0px 0px 0px 0px';
  private configThreshold: number | number[] = [...InViewportConfig.DEFAULT_THRESHOLD];
  private configPartial = true;
  private configDirection: InViewportConfigDirection = InViewportConfigDirection.BOTH;
  private configHash: string;
  private configCheckFn: InViewportConfigCheckFn;

  private static stringify(input: object): string {
    if (Array.isArray(input)) {
      const stringifiedArr = [];

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < input.length; i++) {
        stringifiedArr.push(InViewportConfig.stringify(input[i]));
      }

      return `[${stringifiedArr.join(',')}]`;
    } else if (typeof input === 'object' && input !== null) {
      const acc = [];
      const sortedKeys = Object.keys(input).sort();

      for (const k of sortedKeys) {
        const v = InViewportConfig.stringify(input[k]);

        acc.push(`${k}:${v}`);
      }

      return acc.join(InViewportConfig.STRINGIFY_DELIMITER);
    }

    return String(input);
  }

  private static hash(input: object): string {
    return toBase64(InViewportConfig.stringify(input));
  }

  constructor(options?: InViewportConfigOptions) {
    if (Object.prototype.toString.call(options) === '[object Object]') {
      ['root', 'rootMargin', 'threshold', 'partial', 'direction', 'checkFn'].forEach((prop) => {
        if (options.hasOwnProperty(prop)) {
          this[prop] = options[prop];
        }
      });
    }
    // console.log('config++++++++++++++++++++++Constructor', {
    //   rootMargin: this.rootMargin,
    //   threshold: this.threshold,
    //   partial: this.partial,
    //   direction: this.direction,
    //   checkFn: String(this.checkFn)
    // });
    this.configHash = InViewportConfig.hash({
      rootMargin: this.rootMargin,
      threshold: this.threshold,
      partial: this.partial,
      direction: this.direction,
      checkFn: String(this.checkFn)
    });
  }

  public get root(): Element {
    return this.configRoot;
  }

  public set root(value: Element) {
    this.configRoot = value && value.nodeType === 1 ? value : undefined;
  }

  public get rootMargin(): string {
    return this.configRootMargin;
  }

  public set rootMargin(value: string) {
    if (!value || typeof value !== 'string') {
      this.configRootMargin = '0px 0px 0px 0px';
    } else {
      const marginString: string = value || '0px';
      const margins: string[] = marginString.split(new RegExp('\\s+')).map((margin) => {
        const parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
        if (!parts) {
          throw new TypeError('rootMargin must be specified in pixels or percent');
        }
        return `${parts[1]}${parts[2]}`;
      });

      margins[1] = margins[1] || margins[0];
      margins[2] = margins[2] || margins[0];
      margins[3] = margins[3] || margins[1];

      this.configRootMargin = margins.join(' ');
    }
  }

  public get threshold(): number | number[] {
    return this.configThreshold;
  }

  public set threshold(value: number | number[]) {
    let threshold = [];
    const isValidThreshold = (val: any) => typeof val === 'number' && val >= 0 && val <= 1;
    if (isValidThreshold(value)) {
      threshold = [value];
    } else if (Array.isArray(value) && value.length) {
      threshold = value.filter((val) => isValidThreshold(val));
    }
    if (threshold.length === 0) {
      threshold = [...InViewportConfig.DEFAULT_THRESHOLD];
    }
    this.configThreshold = threshold;
  }

  public get partial(): boolean {
    return this.configPartial;
  }

  public set partial(value: boolean) {
    this.configPartial = !!value;
  }

  public get direction(): InViewportConfigDirection {
    return this.configDirection;
  }

  public set direction(value: InViewportConfigDirection) {
    const isValidValue = (val: any) => {
      return (
        [
          InViewportConfigDirection.BOTH,
          InViewportConfigDirection.HORIZONTAL,
          InViewportConfigDirection.VERTICAL
        ].indexOf(val) >= 0
      );
    };
    this.configDirection = isValidValue(value) ? value : InViewportConfigDirection.BOTH;
  }

  public get hash(): string {
    return this.configHash;
  }

  public get checkFn(): InViewportConfigCheckFn {
    return this.configCheckFn;
  }

  public set checkFn(value: InViewportConfigCheckFn) {
    this.configCheckFn = value;
  }
}
