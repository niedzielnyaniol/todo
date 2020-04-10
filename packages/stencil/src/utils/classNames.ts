function classNames(classes: Array<string>): string {
  return classes.filter((el) => el).join(' ');
}

export default classNames;
