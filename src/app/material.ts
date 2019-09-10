import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatGridListModule, MatMenuModule, MatAutocompleteModule, MatInputModule, MatChipsModule } from "@angular/material";

import { NgModule } from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatGridListModule, MatMenuModule, MatAutocompleteModule, MatInputModule, MatChipsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatGridListModule, MatMenuModule, MatAutocompleteModule, MatInputModule, MatChipsModule]
})
export class MaterialModule {}


