/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/forms';
import * as import2 from '@angular/common';
import * as import3 from '../../../components/survey/survey';
const styles_Survey:any[] = ([] as any[]);
export const RenderType_Survey:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_Survey,
  data: {}
}
);
function View_Survey_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),6,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'input',([] as any[]),[
      [
        8,
        'type',
        0
      ]
      ,
      [
        8,
        'id',
        0
      ]
      ,
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('input' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,2)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,2).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,2)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,2)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(8192,(null as any),0,import1.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef,
      [
        2,
        import1.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵprd(512,(null as any),import1.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import1.DefaultValueAccessor]),
    import0.ɵdid(335872,(null as any),0,import1.FormControlName,[
      [
        3,
        import1.ControlContainer
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import1.NG_VALUE_ACCESSOR
      ]

    ]
      ,{name: [
        0,
        'name'
      ]
    },(null as any)),
    import0.ɵprd(1024,(null as any),import1.NgControl,(null as any),[import1.FormControlName]),
    import0.ɵdid(8192,(null as any),0,import1.NgControlStatus,[import1.NgControl],(null as any),(null as any))
  ]
  ,(ck,v) => {
    const currVal_9:any = (<any>v.parent).context.$implicit.key;
    ck(v,4,0,currVal_9);
  },(ck,v) => {
    const currVal_0:any = import0.ɵinlineInterpolate(1,'',(<any>v.parent).context.$implicit.type,'');
    const currVal_1:any = import0.ɵinlineInterpolate(1,'',(<any>v.parent).context.$implicit.key,'');
    const currVal_2:any = import0.ɵnov(v,6).ngClassUntouched;
    const currVal_3:any = import0.ɵnov(v,6).ngClassTouched;
    const currVal_4:any = import0.ɵnov(v,6).ngClassPristine;
    const currVal_5:any = import0.ɵnov(v,6).ngClassDirty;
    const currVal_6:any = import0.ɵnov(v,6).ngClassValid;
    const currVal_7:any = import0.ɵnov(v,6).ngClassInvalid;
    const currVal_8:any = import0.ɵnov(v,6).ngClassPending;
    ck(v,1,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8);
  });
}
function View_Survey_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'option',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(73728,(null as any),0,import1.NgSelectOption,[
      import0.ElementRef,
      import0.Renderer,
      [
        2,
        import1.SelectControlValueAccessor
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    import0.ɵdid(73728,(null as any),0,import1.ɵq,[
      import0.ElementRef,
      import0.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.context.$implicit.key;
    ck(v,1,0,currVal_0);
    const currVal_1:any = v.context.$implicit.key;
    ck(v,2,0,currVal_1);
  },(ck,v) => {
    const currVal_2:any = v.context.$implicit.value;
    ck(v,3,0,currVal_2);
  });
}
function View_Survey_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),12,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),9,'select',([] as any[]),[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'change'
      ]
      ,
      [
        (null as any),
        'blur'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('change' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,3).onChange($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,3).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(8192,(null as any),0,import1.SelectControlValueAccessor,[
      import0.Renderer,
      import0.ElementRef
    ]
    ,(null as any),(null as any)),
    import0.ɵprd(512,(null as any),import1.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import1.SelectControlValueAccessor]),
    import0.ɵdid(335872,(null as any),0,import1.FormControlName,[
      [
        3,
        import1.ControlContainer
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import1.NG_VALUE_ACCESSOR
      ]

    ]
      ,{name: [
        0,
        'name'
      ]
    },(null as any)),
    import0.ɵprd(1024,(null as any),import1.NgControl,(null as any),[import1.FormControlName]),
    import0.ɵdid(8192,(null as any),0,import1.NgControlStatus,[import1.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n                        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_Survey_4)),
    import0.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵted((null as any),['\n                ']))
  ]
  ,(ck,v) => {
    const currVal_7:any = (<any>v.parent).context.$implicit.key;
    ck(v,5,0,currVal_7);
    const currVal_8:any = (<any>v.parent).context.$implicit.options;
    ck(v,10,0,currVal_8);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,7).ngClassUntouched;
    const currVal_1:any = import0.ɵnov(v,7).ngClassTouched;
    const currVal_2:any = import0.ɵnov(v,7).ngClassPristine;
    const currVal_3:any = import0.ɵnov(v,7).ngClassDirty;
    const currVal_4:any = import0.ɵnov(v,7).ngClassValid;
    const currVal_5:any = import0.ɵnov(v,7).ngClassInvalid;
    const currVal_6:any = import0.ɵnov(v,7).ngClassPending;
    ck(v,2,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
  });
}
function View_Survey_5(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'errorMessage'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['*required']))
  ]
  ,(null as any),(null as any));
}
function View_Survey_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),17,'div',[[
        'class',
        'form-row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'formHeading'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),8,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      import0.ɵdid(8192,(null as any),0,import2.NgSwitch,([] as any[]),{ngSwitch: [
        0,
        'ngSwitch'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_Survey_2)),
    import0.ɵdid(139264,(null as any),0,import2.NgSwitchCase,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import2.NgSwitch
    ]
      ,{ngSwitchCase: [
        0,
        'ngSwitchCase'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_Survey_3)),
    import0.ɵdid(139264,(null as any),0,import2.NgSwitchCase,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import2.NgSwitch
    ]
      ,{ngSwitchCase: [
        0,
        'ngSwitchCase'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_Survey_5)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_1:any = v.context.$implicit.controlType;
    ck(v,6,0,currVal_1);
    const currVal_2:any = 'textbox';
    ck(v,9,0,currVal_2);
    const currVal_3:any = 'dropdown';
    ck(v,12,0,currVal_3);
    const currVal_4:boolean = !co.form.controls[v.context.$implicit.key].valid;
    ck(v,16,0,currVal_4);
  },(ck,v) => {
    const currVal_0:any = v.context.$implicit.text;
    ck(v,3,0,currVal_0);
  });
}
function View_Survey_6(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['The form contains the following values']))
  ]
  ,(null as any),(null as any));
}
export function View_Survey_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),30,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),14,'form',[[
        'novalidate',
        ''
      ]
    ],[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngSubmit'
      ]
      ,
      [
        (null as any),
        'submit'
      ]
      ,
      [
        (null as any),
        'reset'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import3.Survey = v.component;
      if (('submit' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,4).onSubmit($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('reset' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,4).onReset()) !== false);
        ad = (pd_1 && ad);
      }
      if (('ngSubmit' === en)) {
        const pd_2:any = ((<any>co.onSubmit()) !== false);
        ad = (pd_2 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(8192,(null as any),0,import1.ɵbf,([] as any[]),(null as any),(null as any)),
    import0.ɵdid(270336,(null as any),0,import1.FormGroupDirective,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]

    ]
      ,{form: [
        0,
        'form'
      ]
    },{ngSubmit: 'ngSubmit'}),
    import0.ɵprd(1024,(null as any),import1.ControlContainer,(null as any),[import1.FormGroupDirective]),
    import0.ɵdid(8192,(null as any),0,import1.NgControlStatusGroup,[import1.ControlContainer],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_Survey_1)),
    import0.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'form-row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[[
        'type',
        'submit'
      ]
      ],[[
        8,
        'disabled',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Save'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'form-row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_Survey_6)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n            ',
      '\n        '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',[[
        'href',
        'http://www.syntaxsuccess.com/viewarticle/dynamic-form-in-angular-2.0'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Read more here'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import3.Survey = v.component;
    const currVal_7:any = co.form;
    ck(v,4,0,currVal_7);
    const currVal_8:any = co.model.questions;
    ck(v,9,0,currVal_8);
    const currVal_10:any = co.payLoad;
    ck(v,21,0,currVal_10);
  },(ck,v) => {
    var co:import3.Survey = v.component;
    const currVal_0:any = import0.ɵnov(v,6).ngClassUntouched;
    const currVal_1:any = import0.ɵnov(v,6).ngClassTouched;
    const currVal_2:any = import0.ɵnov(v,6).ngClassPristine;
    const currVal_3:any = import0.ɵnov(v,6).ngClassDirty;
    const currVal_4:any = import0.ɵnov(v,6).ngClassValid;
    const currVal_5:any = import0.ɵnov(v,6).ngClassInvalid;
    const currVal_6:any = import0.ɵnov(v,6).ngClassPending;
    ck(v,2,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_9:boolean = !co.form.valid;
    ck(v,13,0,currVal_9);
    const currVal_11:any = co.payLoad;
    ck(v,24,0,currVal_11);
  });
}
function View_Survey_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'survey',([] as any[]),(null as any),(null as any),(null as any),View_Survey_0,RenderType_Survey)),
    import0.ɵdid(57344,(null as any),0,import3.Survey,([] as any[]),(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const SurveyNgFactory:import0.ComponentFactory<import3.Survey> = import0.ɵccf('survey',import3.Survey,View_Survey_Host_0,{model: 'model'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3Rvci9EZXZlbG9wbWVudC9hbmd1bGFyLTItc2FtcGxlcy9jb21wb25lbnRzL3N1cnZleS9zdXJ2ZXkubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvdG9yL0RldmVsb3BtZW50L2FuZ3VsYXItMi1zYW1wbGVzL2NvbXBvbmVudHMvc3VydmV5L3N1cnZleS50cyIsIm5nOi8vL1VzZXJzL3Rvci9EZXZlbG9wbWVudC9hbmd1bGFyLTItc2FtcGxlcy9jb21wb25lbnRzL3N1cnZleS9zdXJ2ZXkuaHRtbCIsIm5nOi8vL1VzZXJzL3Rvci9EZXZlbG9wbWVudC9hbmd1bGFyLTItc2FtcGxlcy9jb21wb25lbnRzL3N1cnZleS9zdXJ2ZXkudHMuU3VydmV5X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdj5cbiAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBxdWVzdGlvbiBvZiBtb2RlbC5xdWVzdGlvbnNcIiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUhlYWRpbmdcIj57e3F1ZXN0aW9uLnRleHR9fTwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJxdWVzdGlvbi5jb250cm9sVHlwZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0Ym94J1wiPjxpbnB1dCB0eXBlPVwie3txdWVzdGlvbi50eXBlfX1cIiBpZD1cInt7cXVlc3Rpb24ua2V5fX1cIiBbZm9ybUNvbnRyb2xOYW1lXT1cInF1ZXN0aW9uLmtleVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidkcm9wZG93bidcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBbZm9ybUNvbnRyb2xOYW1lXT1cInF1ZXN0aW9uLmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbyBvZiBxdWVzdGlvbi5vcHRpb25zXCIgW3ZhbHVlXT1cIm8ua2V5XCI+e3tvLnZhbHVlfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yTWVzc2FnZVwiICpuZ0lmPVwiIWZvcm0uY29udHJvbHNbcXVlc3Rpb24ua2V5XS52YWxpZFwiPipyZXF1aXJlZDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhZm9ybS52YWxpZFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJwYXlMb2FkXCI+PHN0cm9uZz5UaGUgZm9ybSBjb250YWlucyB0aGUgZm9sbG93aW5nIHZhbHVlczwvc3Ryb25nPjwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3twYXlMb2FkfX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGg0PjxhIGhyZWY9XCJodHRwOi8vd3d3LnN5bnRheHN1Y2Nlc3MuY29tL3ZpZXdhcnRpY2xlL2R5bmFtaWMtZm9ybS1pbi1hbmd1bGFyLTIuMFwiPlJlYWQgbW9yZSBoZXJlPC9hPjwvaDQ+XG48L2Rpdj4iLCI8c3VydmV5Pjwvc3VydmV5PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ01nQjtJQUErQjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtR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
