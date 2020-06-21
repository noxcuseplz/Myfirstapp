export class Einkommensteuer {

  public constructor(init?: Partial<Einkommensteuer>) {
    Object.assign(this, init);
  }
  public id?: number;
  public einkommen?: number;
  public gesellschaftsform?: string;
  public sitz?: string;
  public köst?: number;

}
