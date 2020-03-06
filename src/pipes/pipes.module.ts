import { NgModule } from '@angular/core';
import { NlbrPipe } from './nlbr/nlbr';
import { KeyboardAttachPipe } from './keyboard-attach/keyboard-attach';
import { FilterPipe } from './filter/filter';
@NgModule({
	declarations: [NlbrPipe,
	KeyboardAttachPipe,
	FilterPipe
],
	imports: [NlbrPipe,FilterPipe],
	exports: [NlbrPipe,
	KeyboardAttachPipe,
	FilterPipe
]
})
export class PipesModule {}
