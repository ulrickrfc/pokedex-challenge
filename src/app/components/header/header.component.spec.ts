import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a trainer link', () => {
    const trainerLink = fixture.debugElement.query(By.css('#trainer'));
    expect(
      (trainerLink.nativeElement as HTMLAnchorElement).textContent
    ).toEqual('Trainer');
  });
  it('should have a home link', () => {
    const homeLink = fixture.debugElement.query(By.css('#home'));
    expect((homeLink.nativeElement as HTMLAnchorElement).textContent).toEqual(
      'Pokedex'
    );
  });
  it('should have a search button', () => {
    const searchOption = fixture.debugElement.query(By.css('#search'));

    expect(
      (searchOption.nativeElement as HTMLAnchorElement).textContent
    ).toEqual('Search');
  });
});
