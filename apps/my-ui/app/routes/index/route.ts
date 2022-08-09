import Route from '@ember/routing/route';
import RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';

export default class LoginRoute extends Route {
  @service() declare router: RouterService;

  // beforeModel() {
  //   return this.router.transitionTo('login');
  // }
}
