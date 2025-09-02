import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const modalAnimation = trigger('modalAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(100%)' }),
    animate('0.3s ease', style({ transform: 'translateY(0%)' })),
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0%)' }),
    animate('0.3s ease', style({ transform: 'translateY(100%)' })),
  ]),
]);
