import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrabalhosPage } from './trabalhos.page';

describe('Tab1Page', () => {
  let component: TrabalhosPage;
  let fixture: ComponentFixture<TrabalhosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrabalhosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrabalhosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
