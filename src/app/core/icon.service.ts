import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';




@Injectable({
  providedIn: 'root'
})
export class IconService {
  private Icons: Array<object> = [
    {list_numbered: 'ic_format_list_numbered_black_18px'},
    {link: 'ic_insert_link_black_18px'},
    {photo: 'ic_insert_photo_black_18px'},
    {edit: 'ic_mode_edit_black_18px'},
    {search: 'search'},
    {translate: 'cloic_translate_black_18pxe'},
    {events: 'events'},
    {marketing: 'marketing'},
    {business: 'business'},
    {lead: 'lead'},
    {data: 'data'},
    {social: 'social'},
    {public: 'public'},
    {strategy: 'strategy'},
    {corporate_design: 'corporate-design'},
    {logo_design: 'logo-design'},
    {brochure_design: 'brochure-design'},
    {illustration: 'illustration'},
    {package_design: 'package-design'},
    {more: 'more'},
    {pre_production: 'pre-production'},
    {script: 'script'},
    {storuboard: 'storuboard'},
    {four_k: '4-k'},
    {photography: 'photography'},
    {greenscreen: 'greenscreen'},
    {location: 'location'},
    {shooting: 'shooting'},
    {drone: 'drone'},
    {video_editing: 'video-editing'},
    {two_d_3_d: 'two-d-3-d'},
    {storuboard: 'storuboard'},
    {ads: 'ads'},
    {search_new: 'search-new'},
    {youtube_campaings: 'youtube-campaings'},
    {instagram: 'instagram'},
    {snapchat: 'snapchat'},
    {twitter: 'twitter'},
    {facebook_o: 'facebook-o'},
    {linkedin: 'linkedin'},

    {outdoor: 'outdoor'},
    {newspaper: 'newspaper'},
    {celebrity: 'celebrity'},
    {trade_show: 'trade-show'},
    {gift: 'gift'},
    {media_coverage: 'media-coverage'}

  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
   // console.log('!_________IconService - constructor');
    this.registerIcons();
  }

  public registerIcons(): void {
    this.matIconRegistry.addSvgIconSet(this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/icons.svg'));
    this.loadIcons(this.Icons, '../assets/svg/admin');
  }

  private loadIcons(iconKeys: Array<object>, iconUrl: string): void {
    iconKeys.forEach(obj => {
      const [key] = Object.entries(obj);
      this.matIconRegistry.addSvgIcon( key[0], this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${key[1]}.svg`));
    });
  }
}
