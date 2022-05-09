import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesPokemonComponent } from './moves-pokemon.component';

describe('MovesPokemonComponent', () => {
  let component: MovesPokemonComponent;
  let fixture: ComponentFixture<MovesPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovesPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovesPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
