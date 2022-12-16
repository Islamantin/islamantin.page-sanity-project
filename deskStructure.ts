import { StructureBuilder } from "sanity/desk";
import { id as aboutId, title as aboutTitle } from './schemas/s_aboutMe';

export default (S: StructureBuilder) => 
S.list()
  .title('Content')
  .items([
    S.listItem()
        .title(aboutTitle)
            .child(
                S.document()
                    .schemaType(aboutId)
                    .documentId(aboutId)),
    ...S.documentTypeListItems().filter(listItem => ![aboutId].includes(listItem.getId()!)),
  ])