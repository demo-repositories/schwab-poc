const skipTypes = ['media.tag', 'story', 'workflow.metadata'];
const structure = (S) => S.list()
  .title('Content')
  .items([
    // Top level documents
    S.documentTypeListItem('story'),
    // Divider for 'Media'
    S.divider(),
    // Get the rest of the list items, but exclude certain types
    ...S.documentTypeListItems().filter((item) => !skipTypes.includes(item.getId())),
  ]);
export default structure;
