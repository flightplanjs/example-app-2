import Transition from '@ember/routing/-private/transition';
import Route from '@ember/routing/route';
import RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';

export default class LoginRoute extends Route {
  @service('router') declare router: RouterService;

  async beforeModel(transition: Transition) {
    await this.router.transitionTo('login');
  }
}
