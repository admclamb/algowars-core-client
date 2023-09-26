import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
})
export class AvatarComponent {
  @Input() avatarUrl?: string = '/assets/images/avatar/default_avatar.jpg';
  @Input() width?: string = 'w-12';
  @Input() height?: string = 'w-12';
  @Input() id?: string = '';
}
