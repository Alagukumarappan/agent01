import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramPostGeneratorComponent } from './instagram-post-generator.component';

describe('InstagramPostGeneratorComponent', () => {
  let component: InstagramPostGeneratorComponent;
  let fixture: ComponentFixture<InstagramPostGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstagramPostGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramPostGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
