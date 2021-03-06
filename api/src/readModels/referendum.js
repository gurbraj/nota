export const config = {
  key: 'referendumId'
};

export function handler(referendumList, eventData) {
  const event = eventData.event;
  switch(eventData.typeId) {
    case 'ReferendumCreated':
      referendumList.create({
        referendumId: event.referendumId,
        organizationId: event.organizationId,
        name: event.name,
        proposal: event.proposal,
        options: event.options, 
      });
      break;
    case 'ReferendumDeleted':
      //TODO: Deleted referendum needs to be removed from the referendums read model.
      break;
  }
  return referendumList;
}
