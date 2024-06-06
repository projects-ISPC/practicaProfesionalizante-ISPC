import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { regExOnlyNumbers } from 'src/app/utils/regex/regex';
import { CreateStoreDto, Store } from 'src/app/models/store/store-models';
import { StoreDashboardService } from 'src/app/admin/services/store/store-dashboard.service';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
})
export class StoreFormComponent implements OnInit {

  @Input() storeId!: number;
  @Input() action: 'create' | 'edit' | 'delete' = 'create';

  store!: CreateStoreDto;
  storeForm!: FormGroup;

  formEnable: boolean = true;
  isDeleteForm: boolean = false;

  errorMessages: any = {};

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private storeService: StoreDashboardService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.isDeleteForm = this.action === 'delete';

    this.createForm();

    if (typeof this.storeId !== 'undefined') {
      this.getById();
    }

    this.setErrorMessages();
  }

  getById() {
    this.storeService.getStoreById(this.storeId)
      .pipe(map((result: Store) => {
        this.storeForm.get('address')?.setValue(result.street_number);
        this.storeForm.get('province')?.setValue(result.province);
        this.storeForm.get('locality')?.setValue(result.locality);
        this.storeForm.get('telephone')?.setValue(result.telephone);
      })).subscribe();
  }

  onSaveHandle(event: Event) {
    event.preventDefault();
    this.storeForm.markAllAsTouched();

    if (this.action === 'create') {
      this.saveNewStore();
    }

    if (this.action === 'edit') {
      this.saveUpdatedStore();
    }
  }

  saveNewStore() {
    this.store = {
      locality: this.storeForm.value.locality as string,
      province: this.storeForm.value.province as string,
      street_number: this.storeForm.value.address as string,
      telephone: this.storeForm.value.telephone as string
    };

    this.storeService.saveStore(this.store)
      .subscribe((result: Store) => {
        let store: Store = result;

        if (store) {
          this.activeModal.close(true);
        }
      });
  }

  saveUpdatedStore() {
    this.store = {
      locality: this.storeForm.value.locality as string,
      province: this.storeForm.value.province as string,
      street_number: this.storeForm.value.address as string,
      telephone: this.storeForm.value.telephone as string,
    };

    this.storeService.updateStore(this.storeId, this.store)
      .subscribe((result: Store) => {
        let store: Store = result;

        if (store) {
          this.activeModal.close(true);
        }
      });
  }

  onConfirmDelete() {
    this.storeService.deleteStore(this.storeId)
      .subscribe(() => {
        this.activeModal.close(true);
      });
  }

  onClose() {
    this.activeModal.close(false);
  }

  createForm() {
    this.storeForm = this.formBuilder.group({
      address: ['', [Validators.required, Validators.maxLength(80)]],
      province: ['', [Validators.required, Validators.maxLength(50)]],
      locality: ['', [Validators.required, Validators.maxLength(50)]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(regExOnlyNumbers)]],
    });
  }

  get address() {
    return this.storeForm.get('address');
  }

  get province() {
    return this.storeForm.get('province');
  }

  get locality() {
    return this.storeForm.get('locality');
  }

  get telephone() {
    return this.storeForm.get('telephone');
  }

  setErrorMessages() {
    this.errorMessages = {
      address: [
        { type: 'required', message: this.translate.instant('mensajes_de_errores.campo_requerido') },
        { type: 'maxlength', message: this.translate.instant('mensajes_de_errores.error_80_caracteres') }
      ],
      province: [
        { type: 'required', message: this.translate.instant('mensajes_de_errores.campo_requerido') },
        { type: 'maxlength', message: this.translate.instant('mensajes_de_errores.error_80_caracteres') }
      ],
      locality: [
        { type: 'required', message: this.translate.instant('mensajes_de_errores.campo_requerido') },
        { type: 'maxlength', message: this.translate.instant('mensajes_de_errores.error_80_caracteres') }
      ],
      telephone: [
        { type: 'required', message: this.translate.instant('mensajes_de_errores.campo_requerido') },
        { type: 'minlength', message: this.translate.instant('mensajes_de_errores.min_10_digitos') },
        { type: 'maxlength', message: this.translate.instant('mensajes_de_errores.max_13_digitos') },
        { type: 'pattern', message: this.translate.instant('mensajes_de_errores.error_ingreso_email_valido') }
      ],
    };
  }
}
