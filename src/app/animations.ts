import { trigger, state, transition, animate, style } from '@angular/core';

export class Animations {
  //'-webkit-transform','-moz-transform','-o-transform','-ms-transform','transform'
  // https://ianlunn.github.io/Hover/
  // https://www.w3schools.com/css/css3_2dtransforms.asp

  // /------------------------------------------------------------\
  // | animation:slideInOut                                       |
  // | transition -> slide left                                   |
  // | transition -> slide right                                  |
  // \------------------------------------------------------------/
  public static slideInOut = trigger('slideInOut', [
    state('true', style({transform: 'translate3d(0, 0, 0)'})),
    state('false', style({transform: 'translate3d(100%, 0, 0)'})),
    transition('1 => 0', animate('100ms ease-in')),
    transition('0 => 1', animate('300ms ease-out'))
    // OR
    // state('true', style({transform: 'translateX(100%)', opacity: 0})),
    // state('false', style({transform: 'translateX(0)', 'opacity': 1})),
    // transition('1 => 0', animate('500ms', style({transform: 'translateX(0)', opacity: 1}))),
    // transition('0 => 1', animate('500ms', style({transform: 'translateX(100%)', opacity: 0})))
  ]);

  // /------------------------------------------------------------\
  // | animation:showHide                                         |
  // | transition -> shrink                                       |
  // | transition -> show                                         |
  // \------------------------------------------------------------/
  public static showHide = trigger('showHide', [
    state('true', style({
        'display': 'block'
      })
    ),
    state('false', style({
        'display': 'none'
      })
    ),
    transition('0 => 1', [
      style({
        opacity: 0,
        transform: 'scale(1,0.5)'
      }),
      animate('0.6s ease-out')
    ]),
    transition('1 => 0', [
      animate('0.6s ease-out', style({
        opacity: 0,
        transform: 'scale(1,0)'
      }))
    ])
  ]);

  public static showHideX1 = trigger('showHideX1', [
    state('true', style({
        'height': '*',
        'display': 'block'
      })
    ),
    state('false', style({
        'height': '0px',
        'display': 'none'
      })
    ),
    transition('1 => 0', animate(400, style({height: 0}))),
    transition('0 => 1', animate(100, style({height: '*'})))
  ]);

  // /------------------------------------------------------------\
  // | animation:flyInOut                                         |
  // | transition -> left to right                                |
  // | transition -> * to right                                   |
  // | https://angular.io/resources/images/devguide/animations/   |
  // | animation_enter_leave.gif                                  |
  // \------------------------------------------------------------/
  public static flyInOut = trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ]);

  // /------------------------------------------------------------\
  // | animation:showPopScale                                     |
  // | transition -> shrink and hide                              |
  // | transition -> pop scale and bounce                         |
  // \------------------------------------------------------------/
  public static showPopScale = trigger('showPopScale', [
    state('false', style({opacity: 0.8, transform: 'translateY(100%) scale(0)'})),
    state('true', style({opacity: 1, transform: 'translateY(0) scale(1)'})),
    transition('1 => 0', [
      style({
        opacity: 0.8,
        transform: 'scale(1.1)'
      }),
      animate('0.2s ease-in')
    ]),
    transition('0 => 1', [
      animate('0.2s 10 ease-out', style({
        opacity: 0,
        transform: 'scale(0.25)'
      }))
    ])
  ]);

  public static showPopScaleX3 = trigger('showPopScaleX3', [
    state('false', style({opacity: 0.8, transform: 'translateY(100%) scale(0)'})),
    state('true', style({opacity: 1, transform: 'translateY(0) scale(1)'})),
    transition('1 => 0', [
      style({
        opacity: 1,
        transform: 'scale(1.1)'
      }),
      animate('0.2s ease-in')
    ]),
    transition('0 => 1', [
      animate('0.2s 10 ease-out', style({
        opacity: 0,
        transform: 'scale(0.1)'
      }))
    ])
  ]);

  public static showPopScaleX2 = trigger('showPopScaleX2', [
    state('false', style({opacity: 0.8, transform: 'translateY(100%) scale(0)'})),
    state('true', style({opacity: 1, transform: 'translateY(0) scale(1)'})),
    transition('1 => 0', animate('300ms')),
    transition('0 => 1', animate('500ms'))
  ]);

  public static showPopScaleX1 = trigger('showPopScaleX1', [
    state('true', style({
        'height': '*',
        'width': '*',
        'display': 'block'
      })
    ),
    state('false', style({
        'height': '0px',
        'width': '0px',
        'display': 'none'
      })
    ),
    transition('1 <=> 0',
      animate('100ms ease-out')
    )
  ]);

  // /------------------------------------------------------------\
  // | animation:showHideFast                                     |
  // | transition -> hide fast                                    |
  // | transition -> show fast                                    |
  // \------------------------------------------------------------/
  public static showHideFast = trigger('showHideFast', [
    state('true', style({
        'display': 'block'
      })
    ),
    state('false', style({
        'display': 'none'
      })
    ),
    transition('1 => 0', animate('10ms ease-in')),
    transition('0 => 1', animate('10ms ease-out'))
  ]);

}
