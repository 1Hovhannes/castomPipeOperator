import { map } from 'rxjs/operators';
import { MonoTypeOperatorFunction } from 'rxjs';

export const ignorSymbols = (
  delimiter: string = ''
): MonoTypeOperatorFunction<string> => {
  return (input$) =>
    input$.pipe(map((text) => text.replace(/[^\w\s]/gi, delimiter)));
};
