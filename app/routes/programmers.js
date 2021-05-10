import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Rich Harris', 'Evan You', 'Dan Abramov'];
  }
}
