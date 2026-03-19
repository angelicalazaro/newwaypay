import { platformBrowser } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';

platformBrowser()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    const upgrade = platformRef.injector.get(UpgradeModule);
    upgrade.bootstrap(document.body, ['newWayPay'], { strictDi: true });
  });
