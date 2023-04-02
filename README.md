# Serwis bankomatów

Zespół serwisujący bankomaty przychodzi do pracy po długim weekendzie. 
System zleceń serwisowych zawiera zgłoszenia, które muszą ustawić w kolejce obsługi. 
Kolejka związana jest trasą przejazdu grupy konwojowej przez poszczególne regiony a wyznaczona trasa przejazdu pomiędzy regionami została już zatwierdzona.
Zleceń jest bardzo dużo ponieważ oprócz zaplanowanych na dzisiaj standardowych i priorytetowych prac zasilenia bankomatu, pojawiły się inne zgłoszenia które również trzeba obsłużyć. 
Jednym z takich zgłoszeń jest sygnał o niskim stanie gotówki bankomatu, który nie był na dzisiaj zaplanowany takie zgłoszenie powinno być zrealizowane zaraz po zakończeniu prac nad zleceniami planowanymi priorytetowymi w danym regionie. 
Innym jest sygnał o awarii bankomatu z którym zespół techniczny nie ma komunikacji i nie może przeprowadzić procedury zdalnego ponownego uruchomienia. Takie zgłoszenie powinno zostać zrealizowane w pierwszej kolejności w danym regionie. 
Priorytetowe planowane zasilenie bankomatu dotyczy urządzenia gdzie trend zużycia stanu gotówki jest wysoki dlatego ta operacja jest wykonywana przez zleceniami standardowymi. 

## Zadanie
Przygotuj system który przygotuje odpowiednią kolejność zleceń do obsługi dla grupy konwojowej, przy założeniu że:
1)	konwój przejeżdża przez regiony biorąc pod uwagę rosnącą kolejność przydzielonych im numerów,
2)	dany bankomat na liście zleceń dla grupy konwojowej może wystąpić tylko raz.

## Przykładowy request/response:
W folderze: './example'

## Algorytm
W pliku: './models/atms.js'

```javascript
// Unredable style ;-)
exports.calculateOrder = (data) => data.sort(s).map(m).filter(f);
const s = (a, b) => a.region !== b.region ? a.region - b.region : o[a.requestType] - o[b.requestType];
const m = (e) => ({ region: e.region, atmId: e.atmId });
const f = (v, i, a) => a.findIndex((e) => e.region === v.region && e.atmId === v.atmId) === i;
const o = {FAILURE_RESTART: 0, PRIORITY: 1, SIGNAL_LOW: 2, STANDARD: 3 };
```