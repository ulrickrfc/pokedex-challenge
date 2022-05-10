import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PokemonCardComponent } from './pokemon-card.component';

fdescribe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title from input', () => {
    component.name = 'Pikachu';
    fixture.detectChanges();
    const elementName = fixture.debugElement.query(By.css('#name'));
    expect(
      (elementName.nativeElement as HTMLAnchorElement).textContent
    ).toContain('Pikachu');
  });
});
