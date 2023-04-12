import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.jpg';

  constructor(){
    //before render
    //No async -- once time
    console.log('Constructor', 'imgValue =>',this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
      //before render
      //changes inputs -- many times
      console.log('ngChanges', 'imgValue =>',this.img);
  }

  ngOnInit(): void {
    //before render
    //async - fetch -- once time
    console.log('ngOnit', 'imgValue =>',this.img);
  }

  ngAfterViewInit(): void {
      //after render
      //handler children
      console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
      //delete
      console.log('ngOnDestroy');
  }

  imgError(){
    this.img = this.imageDefault
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
