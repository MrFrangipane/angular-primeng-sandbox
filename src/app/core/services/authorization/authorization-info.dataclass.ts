

// Todo check if 'class' is enough
export class AuthorizationInfo {
  isLoggedIn: boolean = false;
  userRoles: string[] = [];

  hasEnoughRights(): boolean {
    return this.isLoggedIn && this.userRoles.length > 0;
  }
}
