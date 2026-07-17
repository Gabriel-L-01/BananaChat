## [← Powrót](/README.md)

# Schemat projektu BananaChat

## Klient - pendrive

### Zapisywane dane

- `encrypted_private_keys` - Zaszyfrowane algorytmem AES-GCM (kluczem z PBKDF2 na bazie PINu) klucze prywatne do czatów oraz sejfu.
- `salt` - Jawna sól kryptograficzna używana do generowania klucza z PINu.
- `public_keys` - Jawne klucze publiczne użytkownika oraz jego zaufanych kontaktów.

---

## Serwer - firebase

### Zapisywane dane

- **Dane użytkownika**
  - Login
  - Hash hasła (zabezpieczony metodą kryptograficzną po stronie serwera)
  - **Sejf (Vault)**
    - Klucz publiczny sejfu użytkownika (służący do szyfrowania nadawczego)
    - Aktywne, jednorazowe Tokeny Nadawcze (antyspam)
    - `encrypted_drops` - Lista zaszyfrowanych paczek tekstowych/plików oczekujących na odebranie przez właściciela sejfu.
- **Chaty (1:1)**
  - ID/Loginy użytkowników biorących udział w konwersacji
  - Aktualne klucze publiczne obu stron (do wymiany ECDH)
  - Wiadomości _(w tym zaszyfrowane linki/metadane plików)_
