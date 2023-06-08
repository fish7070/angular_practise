import { Component, OnInit , OnDestroy} from '@angular/core';
import { BehaviorSubject, Observable, from, map, of } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit, OnDestroy{
  array = [1, 2, 3, 4, 5];
  pipe: Observable<number> = from(this.array);
  pipe2 = this.pipe.pipe(
    map((num) => {
      return num + 1;
    })
  ).subscribe(
    {
      next: (v) => console.log(`observerA: ${v}`),
    }
  );
  constructor() {
    const subject = new BehaviorSubject(0); // 0 is the initial value
    subject
      .pipe(
        map((num) => {
          return num + 1;
        })
      )
      .subscribe({
        next: (v) => console.log(`observerA: ${v}`),
      });

    subject.next(1);
    subject.next(18);

    subject.pipe().subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(3);

    this.num();
  }

  ngOnInit(): void {

  }



  num() {
    of(this.array).subscribe((arr) => {
      console.log(arr);
    });
  }

  ngOnDestroy(): void {
    
  }
}
