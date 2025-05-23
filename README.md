Reflection

1. laut dee 12 faktor prinzip also die config sollen configs und code seperat gespeichert sein. Daher können wir die anwendungen in verschidenen umgebungen verwenden ohne dass das image anfassen zu müssen. Wie zum beispiel es kein sinn macht sensible daten wie passworter usw. in die ıage einzubinden 'duh'. 

2. der unterschied zwischen einen configmap und einer secret is sehr simple configmap ist einfach eine konfigurations datei und sollte daher keine sensible daten wie passwörter api-schlüssel usw miteinbehalten 'duh' und k8s behandel secret dateien anders wenn die gepushed werden daher sie base64 methode kodiert gespeichert werden.

3.1 in der envsektion des containers kann man mit vlaueform.configmakeyref oder valuefrom.sercretleyref einzelne werde aus dem confıgmaps oder secrets rausfischen und verfügbar machen.

3.2 mit der volume und volumemounts section kann man die config map und die secrets zusammenschleussen im container. Anscheinend bei grossen config dateien oder zertifikaten ein must have.

4. eine gemountete datei ist offensichtlich einfacher daher man env ver. im pod descripted ist und dahin rein zu schauen braucht mann extra steps wie rechte geben oder einen secret manager benützen muss.

5.stringdata ist nicht verschlüsselt aber sehr praktisch für schnelle test uder mal einen demo zu machen. daher ist es ein bisschen unklug weil alle sensible dateien drauf sind und ımmer lokal bleiben sollte anstatt auf einen git rep...