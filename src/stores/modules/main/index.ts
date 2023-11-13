import { RootStore } from "../../store";
import { atom } from 'nanostores';


export class Main {
    private rootStore: RootStore;

    repository = atom({
        isDelete: false,
    });

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    setIsDelete = (payload: boolean) => {
        this.repository.set({ ...this.repository.get(), isDelete: payload });
    };

}
