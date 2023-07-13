import {Inject, Injectable, Optional, PLATFORM_ID} from '@angular/core';
import {makeStateKey, StateKey, TransferState} from '@angular/core'
import {isPlatformServer} from '@angular/common';
import {SERVER_PROFILE} from '@core/state-transfer-factory';

@Injectable({
  providedIn: 'root'
})
export class TransferStateService {
  private keys = new Map<string, StateKey<string>>();

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: string,
    @Optional() @Inject(SERVER_PROFILE) public profileServer: string,
    private readonly transferState: TransferState
  ) {}

  get(
    key: string,
    defaultValue: any | null = null
  ): string | null {
    if (!this.has(key)) {
      return defaultValue || null;
    }

    return this.transferState.get<string>(
      this.getStateKey(key),
      defaultValue as any
    );
  }

  has(key: string): boolean {
    return this.transferState.hasKey(this.getStateKey(key));
  }

  set(key: string, value: any): void {
    if (isPlatformServer(this.platformId)) {
      if (this.has(key)) {
        console.warn(
          `Setting existing value into TransferState using key: '${key}'`
        );
      }

      this.transferState.set(
        this.getStateKey(key),
        value
      );
    }
  }

  private getStateKey(key: string): StateKey<string> {
    if (this.keys.has(key)) {
      return this.keys.get(key) as StateKey<string>;
    }

    this.keys.set(key, makeStateKey(key));

    return this.keys.get(key) as StateKey<string>;
  }

  public  getProfileByServer(){
    if (isPlatformServer(this.platformId)) {
      return this.profileServer;
    }
    return null;
  }
}
