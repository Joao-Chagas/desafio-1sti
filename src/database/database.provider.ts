import { Provider } from "@nestjs/common";
import { DatabaseService } from "@database/database.service";

export const DatabaseProvider: Provider = {
    provide: 'Database',
    useClass: DatabaseService,
}