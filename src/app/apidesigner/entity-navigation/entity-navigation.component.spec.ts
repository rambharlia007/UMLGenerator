import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityNavigationComponent } from './entity-navigation.component';

describe('EntityNavigationComponent', () => {
  let component: EntityNavigationComponent;
  let fixture: ComponentFixture<EntityNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
