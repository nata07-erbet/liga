const mockBath = `{
  "data": [
    {
      "id": "nomad",
      "name": "Баня кочевника",
      "guest": {
        "min": 2,
        "max": 4
      },
      "guestMin": 1,
      "price": "30 000 — 26 667",
      "cover": {
        "mobile": {
          "jpg": "img/content/bath-options/img-1.jpg",
          "jpg2x": "img/content/bath-options/img-1@2x.jpg",
          "webp": "img/content/bath-options/img-1.webp",
          "webp2x": "img/content/bath-options/img-1@2x.webp"
        },
        "desktop": {
          "jpg": "img/content/bath-options/img-1.jpg",
          "jpg2x": "img/content/bath-options/img-1@2x.jpg",
          "webp": "img/content/bath-options/img-1.webp",
          "webp2x": "img/content/bath-options/img-1@2x.webp"
        }
      },
      "gallery": {
        "mobile": [
          {
            "jpg": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-1.jpg",
            "jpg2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-1@2x.jpg",
            "webp": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-1.webp",
            "webp2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-1@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-2.jpg",
            "jpg2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-2@2x.jpg",
            "webp": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-2.webp",
            "webp2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-2@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-3.jpg",
            "jpg2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-3@2x.jpg",
            "webp": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-3.webp",
            "webp2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-3@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-4.jpg",
            "jpg2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-4@2x.jpg",
            "webp": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-4.webp",
            "webp2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-4@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-5.jpg",
            "jpg2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-5@2x.jpg",
            "webp": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-5.webp",
            "webp2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-5@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-6.jpg",
            "jpg2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-6@2x.jpg",
            "webp": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-6.webp",
            "webp2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-6@2x.webp"
          }
        ],
        "desktop": [
          {
            "jpg": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-1.jpg",
            "jpg2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-1@2x.jpg",
            "webp": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-1.webp",
            "webp2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-1@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-2.jpg",
            "jpg2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-2@2x.jpg",
            "webp": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-2.webp",
            "webp2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-2@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-3.jpg",
            "jpg2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-3@2x.jpg",
            "webp": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-3.webp",
            "webp2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-3@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-4.jpg",
            "jpg2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-4@2x.jpg",
            "webp": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-4.webp",
            "webp2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-4@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-5.jpg",
            "jpg2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-5@2x.jpg",
            "webp": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-5.webp",
            "webp2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-5@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-6.jpg",
            "jpg2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-6@2x.jpg",
            "webp": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-6.webp",
            "webp2x": "img/slides/baths-slider-nomad/desktop/kochevnik-photo-6@2x.webp"
          }
        ]
      },
      "info": {
        "description": "Вы ощутите на себе быструю смену климата в местах обитания кочевых народов: прохладный дождь, яркое солнце, теплый сильный ветер.",
        "table": [
          {
            "key": "Пар",
            "value": "Полынь лимонная, мята болотная, анис, можжевельник"
          },
          {
            "key": "Скрабы",
            "value": "Медово-травяное крошево, молотый кедровый орех с алтайскими травами"
          },
          {
            "key": "Веники",
            "value": "Дуб, береза, пихта, можжевельник"
          },
          {
            "key": "Звуки",
            "value": "Живые звуки — вибратоны, шейкеры"
          }
        ]
      }
    },
    {
      "id": "kurnaya-izba",
      "name": "Курная изба",
      "guest": {
        "min": 2,
        "max": 3
      },
      "guestMin": 1,
      "price": "30 000 — 26 667",
      "cover": {
        "mobile": {
          "jpg": "img/content/bath-options/img-1.jpg",
          "jpg2x": "img/content/bath-options/img-1@2x.jpg",
          "webp": "img/content/bath-options/img-1.webp",
          "webp2x": "img/content/bath-options/img-1@2x.webp"
        },
        "desktop": {
          "jpg": "img/content/bath-options/img-1.jpg",
          "jpg2x": "img/content/bath-options/img-1@2x.jpg",
          "webp": "img/content/bath-options/img-1.webp",
          "webp2x": "img/content/bath-options/img-1@2x.webp"
        }
      },
      "gallery": {
        "mobile": [
          {
            "jpg": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-1.jpg",
            "jpg2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-1@2x.jpg",
            "webp": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-1.webp",
            "webp2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-1@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-2.jpg",
            "jpg2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-2@2x.jpg",
            "webp": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-2.webp",
            "webp2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-2@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-3.jpg",
            "jpg2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-3@2x.jpg",
            "webp": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-3.webp",
            "webp2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-3@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-4.jpg",
            "jpg2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-4@2x.jpg",
            "webp": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-4.webp",
            "webp2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-4@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-5.jpg",
            "jpg2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-5@2x.jpg",
            "webp": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-5.webp",
            "webp2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-5@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-6.jpg",
            "jpg2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-6@2x.jpg",
            "webp": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-6.webp",
            "webp2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-6@2x.webp"
          }
        ],
        "desktop": [
          {
            "jpg": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-1.jpg",
            "jpg2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-1@2x.jpg",
            "webp": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-1.webp",
            "webp2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-1@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-2.jpg",
            "jpg2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-2@2x.jpg",
            "webp": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-2.webp",
            "webp2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-2@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-3.jpg",
            "jpg2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-3@2x.jpg",
            "webp": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-3.webp",
            "webp2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-3@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-4.jpg",
            "jpg2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-4@2x.jpg",
            "webp": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-4.webp",
            "webp2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-4@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-5.jpg",
            "jpg2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-5@2x.jpg",
            "webp": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-5.webp",
            "webp2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-5@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-6.jpg",
            "jpg2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-6@2x.jpg",
            "webp": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-6.webp",
            "webp2x": "img/slides/baths-slider-kyrnaia-izba/desktop/kyr-6@2x.webp"
          }
        ]
      },
      "info": {
        "description": "Сибирская деревенская баня. Парная из липовой дранки, с ароматом бани по-черному, как у бабушки в деревне. Особый,  целебный, духмяный пар, наполненный запахами трав.",
        "table": [
          {
            "key": "Пар",
            "value": "Береза, смородина, душица, полынь горькая"
          },
          {
            "key": "Скрабы",
            "value": "Настой душицы, береза"
          },
          {
            "key": "Веники",
            "value": "Дуб, береза, липа"
          },
          {
            "key": "Звуки",
            "value": "Цимбалы, ботало"
          }
        ]
      }
    },
    {
      "id": "healer",
      "name": "Баня знахаря",
      "guest": {
        "min": 3,
        "max": 6
      },
      "guestMin": 1,
      "price": "30 000 — 26 667",
      "cover": {
        "mobile": {
          "jpg": "img/content/bath-options/img-1.jpg",
          "jpg2x": "img/content/bath-options/img-1@2x.jpg",
          "webp": "img/content/bath-options/img-1.webp",
          "webp2x": "img/content/bath-options/img-1@2x.webp"
        },
        "desktop": {
          "jpg": "img/content/bath-options/img-1.jpg",
          "jpg2x": "img/content/bath-options/img-1@2x.jpg",
          "webp": "img/content/bath-options/img-1.webp",
          "webp2x": "img/content/bath-options/img-1@2x.webp"
        }
      },
      "gallery": {
        "mobile": [
          {
            "jpg": "img/slides/baths-slider-healer/desktop/healer-1.jpg",
            "jpg2x": "img/slides/baths-slider-healer/desktop/healer-1@2x.jpg",
            "webp": "img/slides/baths-slider-healer/desktop/healer-1.webp",
            "webp2x": "img/slides/baths-slider-healer/desktop/healer-1@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-healer/desktop/healer-2.jpg",
            "jpg2x": "img/slides/baths-slider-healer/desktop/healer-2@2x.jpg",
            "webp": "img/slides/baths-slider-healer/desktop/healer-2.webp",
            "webp2x": "img/slides/baths-slider-healer/desktop/healer-2@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-healer/desktop/healer-3.jpg",
            "jpg2x": "img/slides/baths-slider-healer/desktop/healer-3@2x.jpg",
            "webp": "img/slides/baths-slider-healer/desktop/healer-3.webp",
            "webp2x": "img/slides/baths-slider-healer/desktop/healer-3@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-healer/desktop/healer-4.jpg",
            "jpg2x": "img/slides/baths-slider-healer/desktop/healer-4@2x.jpg",
            "webp": "img/slides/baths-slider-healer/desktop/healer-4.webp",
            "webp2x": "img/slides/baths-slider-healer/desktop/healer-4@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-healer/desktop/healer-5.jpg",
            "jpg2x": "img/slides/baths-slider-healer/desktop/healer-5@2x.jpg",
            "webp": "img/slides/baths-slider-healer/desktop/healer-5.webp",
            "webp2x": "img/slides/baths-slider-healer/desktop/healer-5@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-healer/desktop/healer-6.jpg",
            "jpg2x": "img/slides/baths-slider-healer/desktop/healer-6@2x.jpg",
            "webp": "img/slides/baths-slider-healer/desktop/healer-6.webp",
            "webp2x": "img/slides/baths-slider-healer/desktop/healer-6@2x.webp"
          }
        ],
        "desktop": [
          {
            "jpg": "img/slides/baths-slider-healer/desktop/healer-1.jpg",
            "jpg2x": "img/slides/baths-slider-healer/desktop/healer-1@2x.jpg",
            "webp": "img/slides/baths-slider-healer/desktop/healer-1.webp",
            "webp2x": "img/slides/baths-slider-healer/desktop/healer-1@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-healer/desktop/healer-2.jpg",
            "jpg2x": "img/slides/baths-slider-healer/desktop/healer-2@2x.jpg",
            "webp": "img/slides/baths-slider-healer/desktop/healer-2.webp",
            "webp2x": "img/slides/baths-slider-healer/desktop/healer-2@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-healer/desktop/healer-3.jpg",
            "jpg2x": "img/slides/baths-slider-healer/desktop/healer-3@2x.jpg",
            "webp": "img/slides/baths-slider-healer/desktop/healer-3.webp",
            "webp2x": "img/slides/baths-slider-healer/desktop/healer-3@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-healer/desktop/healer-4.jpg",
            "jpg2x": "img/slides/baths-slider-healer/desktop/healer-4@2x.jpg",
            "webp": "img/slides/baths-slider-healer/desktop/healer-4.webp",
            "webp2x": "img/slides/baths-slider-healer/desktop/healer-4@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-healer/desktop/healer-5.jpg",
            "jpg2x": "img/slides/baths-slider-healer/desktop/healer-5@2x.jpg",
            "webp": "img/slides/baths-slider-healer/desktop/healer-5.webp",
            "webp2x": "img/slides/baths-slider-healer/desktop/healer-5@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-healer/desktop/healer-6.jpg",
            "jpg2x": "img/slides/baths-slider-healer/desktop/healer-6@2x.jpg",
            "webp": "img/slides/baths-slider-healer/desktop/healer-6.webp",
            "webp2x": "img/slides/baths-slider-healer/desktop/healer-6@2x.webp"
          }
        ]
      },
      "info": {
        "description": "Дубовая парная с ароматами сибирского разнотравья и звукотерапия в специальной фито-комнате.",
        "table": [
          {
            "key": "Пар",
            "value": "Прополисный положок, донник, таволга, мята лесная"
          },
          {
            "key": "Скрабы",
            "value": "Медовый, анисовый, пихтовый"
          },
          {
            "key": "Веники",
            "value": "Дуб, береза, можжевельник"
          },
          {
            "key": "Звуки",
            "value": "Шум ручья, валдайские колокольчики"
          }
        ]
      }
    },
    {
      "id": "olkhon",
      "name": "Ольхон",
      "guest": {
        "min": 3,
        "max": 6
      },
      "guestMin": 1,
      "price": "30 000 — 26 667",
      "cover": {
        "mobile": {
          "jpg": "img/content/bath-options/img-1.jpg",
          "jpg2x": "img/content/bath-options/img-1@2x.jpg",
          "webp": "img/content/bath-options/img-1.webp",
          "webp2x": "img/content/bath-options/img-1@2x.webp"
        },
        "desktop": {
          "jpg": "img/content/bath-options/img-1.jpg",
          "jpg2x": "img/content/bath-options/img-1@2x.jpg",
          "webp": "img/content/bath-options/img-1.webp",
          "webp2x": "img/content/bath-options/img-1@2x.webp"
        }
      },
      "gallery": {
        "mobile": [
          {
            "jpg": "img/slides/baths-slider-olkhon/desktop/olkhon-1.jpg",
            "jpg2x": "img/slides/baths-slider-olkhon/desktop/olkhon-1@2x.jpg",
            "webp": "img/slides/baths-slider-olkhon/desktop/olkhon-1.webp",
            "webp2x": "img/slides/baths-slider-olkhon/desktop/olkhon-1@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-olkhon/desktop/olkhon-2.jpg",
            "jpg2x": "img/slides/baths-slider-olkhon/desktop/olkhon-2@2x.jpg",
            "webp": "img/slides/baths-slider-olkhon/desktop/olkhon-2.webp",
            "webp2x": "img/slides/baths-slider-olkhon/desktop/olkhon-2@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-olkhon/desktop/olkhon-3.jpg",
            "jpg2x": "img/slides/baths-slider-olkhon/desktop/olkhon-3@2x.jpg",
            "webp": "img/slides/baths-slider-olkhon/desktop/olkhon-3.webp",
            "webp2x": "img/slides/baths-slider-olkhon/desktop/olkhon-3@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-olkhon/desktop/olkhon-4.jpg",
            "jpg2x": "img/slides/baths-slider-olkhon/desktop/olkhon-4@2x.jpg",
            "webp": "img/slides/baths-slider-olkhon/desktop/olkhon-4.webp",
            "webp2x": "img/slides/baths-slider-olkhon/desktop/olkhon-4@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-olkhon/desktop/olkhon-5.jpg",
            "jpg2x": "img/slides/baths-slider-olkhon/desktop/olkhon-5@2x.jpg",
            "webp": "img/slides/baths-slider-olkhon/desktop/olkhon-5.webp",
            "webp2x": "img/slides/baths-slider-olkhon/desktop/olkhon-5@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-olkhon/desktop/olkhon-6.jpg",
            "jpg2x": "img/slides/baths-slider-olkhon/desktop/olkhon-6@2x.jpg",
            "webp": "img/slides/baths-slider-olkhon/desktop/olkhon-6.webp",
            "webp2x": "img/slides/baths-slider-olkhon/desktop/olkhon-6@2x.webp"
          }
        ],
        "desktop": [
          {
            "jpg": "img/slides/baths-slider-olkhon/desktop/olkhon-1.jpg",
            "jpg2x": "img/slides/baths-slider-olkhon/desktop/olkhon-1@2x.jpg",
            "webp": "img/slides/baths-slider-olkhon/desktop/olkhon-1.webp",
            "webp2x": "img/slides/baths-slider-olkhon/desktop/olkhon-1@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-olkhon/desktop/olkhon-2.jpg",
            "jpg2x": "img/slides/baths-slider-olkhon/desktop/olkhon-2@2x.jpg",
            "webp": "img/slides/baths-slider-olkhon/desktop/olkhon-2.webp",
            "webp2x": "img/slides/baths-slider-olkhon/desktop/olkhon-2@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-olkhon/desktop/olkhon-3.jpg",
            "jpg2x": "img/slides/baths-slider-olkhon/desktop/olkhon-3@2x.jpg",
            "webp": "img/slides/baths-slider-olkhon/desktop/olkhon-3.webp",
            "webp2x": "img/slides/baths-slider-olkhon/desktop/olkhon-3@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-olkhon/desktop/olkhon-4.jpg",
            "jpg2x": "img/slides/baths-slider-olkhon/desktop/olkhon-4@2x.jpg",
            "webp": "img/slides/baths-slider-olkhon/desktop/olkhon-4.webp",
            "webp2x": "img/slides/baths-slider-olkhon/desktop/olkhon-4@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-olkhon/desktop/olkhon-5.jpg",
            "jpg2x": "img/slides/baths-slider-olkhon/desktop/olkhon-5@2x.jpg",
            "webp": "img/slides/baths-slider-olkhon/desktop/olkhon-5.webp",
            "webp2x": "img/slides/baths-slider-olkhon/desktop/olkhon-5@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-olkhon/desktop/olkhon-6.jpg",
            "jpg2x": "img/slides/baths-slider-olkhon/desktop/olkhon-6@2x.jpg",
            "webp": "img/slides/baths-slider-olkhon/desktop/olkhon-6.webp",
            "webp2x": "img/slides/baths-slider-olkhon/desktop/olkhon-6@2x.webp"
          }
        ]
      },
      "info": {
        "description": "Глиняная парная без острых углов создает особое движение и насыщенность пара. Атмосфера настоящего стойбища шамана на Байкале.",
        "table": [
          {
            "key": "Пар",
            "value": "Артыш, анис, чабрец, зверобой, можжевельник"
          },
          {
            "key": "Скрабы",
            "value": "Сила шамана, байкальский лед"
          },
          {
            "key": "Веники",
            "value": "Дуб, береза, можжевельник"
          },
          {
            "key": "Звуки",
            "value": "Бубен, варган"
          }
        ]
      }
    },
    {
      "id": "taiga",
      "name": "Таежная изба",
      "guest": {
        "min": 5,
        "max": 10
      },
      "guestMin": 5,
      "price": "30 000 — 26 667",
      "cover": {
        "mobile": {
          "jpg": "img/content/bath-options/img-1.jpg",
          "jpg2x": "img/content/bath-options/img-1@2x.jpg",
          "webp": "img/content/bath-options/img-1.webp",
          "webp2x": "img/content/bath-options/img-1@2x.webp"
        },
        "desktop": {
          "jpg": "img/content/bath-options/img-1.jpg",
          "jpg2x": "img/content/bath-options/img-1@2x.jpg",
          "webp": "img/content/bath-options/img-1.webp",
          "webp2x": "img/content/bath-options/img-1@2x.webp"
        }
      },
      "gallery": {
        "mobile": [
          {
            "jpg": "img/slides/baths-slider-tayga/desktop/tayga-1.jpg",
            "jpg2x": "img/slides/baths-slider-tayga/desktop/tayga-1@2x.jpg",
            "webp": "img/slides/baths-slider-tayga/desktop/tayga-1.webp",
            "webp2x": "img/slides/baths-slider-tayga/desktop/tayga-1@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-tayga/desktop/tayga-2.jpg",
            "jpg2x": "img/slides/baths-slider-tayga/desktop/tayga-2@2x.jpg",
            "webp": "img/slides/baths-slider-tayga/desktop/tayga-2.webp",
            "webp2x": "img/slides/baths-slider-tayga/desktop/tayga-2@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-tayga/desktop/tayga-3.jpg",
            "jpg2x": "img/slides/baths-slider-tayga/desktop/tayga-3@2x.jpg",
            "webp": "img/slides/baths-slider-tayga/desktop/tayga-3.webp",
            "webp2x": "img/slides/baths-slider-tayga/desktop/tayga-3@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-tayga/desktop/tayga-4.jpg",
            "jpg2x": "img/slides/baths-slider-tayga/desktop/tayga-4@2x.jpg",
            "webp": "img/slides/baths-slider-tayga/desktop/tayga-4.webp",
            "webp2x": "img/slides/baths-slider-tayga/desktop/tayga-4@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-tayga/desktop/tayga-5.jpg",
            "jpg2x": "img/slides/baths-slider-tayga/desktop/tayga-5@2x.jpg",
            "webp": "img/slides/baths-slider-tayga/desktop/tayga-5.webp",
            "webp2x": "img/slides/baths-slider-tayga/desktop/tayga-5@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-tayga/desktop/tayga-6.jpg",
            "jpg2x": "img/slides/baths-slider-tayga/desktop/tayga-6@2x.jpg",
            "webp": "img/slides/baths-slider-tayga/desktop/tayga-6.webp",
            "webp2x": "img/slides/baths-slider-tayga/desktop/tayga-6@2x.webp"
          }
        ],
        "desktop": [
          {
            "jpg": "img/slides/baths-slider-tayga/desktop/tayga-1.jpg",
            "jpg2x": "img/slides/baths-slider-tayga/desktop/tayga-1@2x.jpg",
            "webp": "img/slides/baths-slider-tayga/desktop/tayga-1.webp",
            "webp2x": "img/slides/baths-slider-tayga/desktop/tayga-1@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-tayga/desktop/tayga-2.jpg",
            "jpg2x": "img/slides/baths-slider-tayga/desktop/tayga-2@2x.jpg",
            "webp": "img/slides/baths-slider-tayga/desktop/tayga-2.webp",
            "webp2x": "img/slides/baths-slider-tayga/desktop/tayga-2@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-tayga/desktop/tayga-3.jpg",
            "jpg2x": "img/slides/baths-slider-tayga/desktop/tayga-3@2x.jpg",
            "webp": "img/slides/baths-slider-tayga/desktop/tayga-3.webp",
            "webp2x": "img/slides/baths-slider-tayga/desktop/tayga-3@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-tayga/desktop/tayga-4.jpg",
            "jpg2x": "img/slides/baths-slider-tayga/desktop/tayga-4@2x.jpg",
            "webp": "img/slides/baths-slider-tayga/desktop/tayga-4.webp",
            "webp2x": "img/slides/baths-slider-tayga/desktop/tayga-4@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-tayga/desktop/tayga-5.jpg",
            "jpg2x": "img/slides/baths-slider-tayga/desktop/tayga-5@2x.jpg",
            "webp": "img/slides/baths-slider-tayga/desktop/tayga-5.webp",
            "webp2x": "img/slides/baths-slider-tayga/desktop/tayga-5@2x.webp"
          },
          {
            "jpg": "img/slides/baths-slider-tayga/desktop/tayga-6.jpg",
            "jpg2x": "img/slides/baths-slider-tayga/desktop/tayga-6@2x.jpg",
            "webp": "img/slides/baths-slider-tayga/desktop/tayga-6.webp",
            "webp2x": "img/slides/baths-slider-tayga/desktop/tayga-6@2x.webp"
          }
        ]
      },
      "info": {
        "description": "Хвойные ароматы и парение можжевеловыми вениками. Отдыхая в горячей кедровой купели среди живых елок, вы слышите звуки сибирской тайги.",
        "table": [
          {
            "key": "Пар",
            "value": "Пихта, можжевельник, масло сосны"
          },
          {
            "key": "Скрабы",
            "value": "Таежная клюква, хвойный затир, кедровый затир"
          },
          {
            "key": "Веники",
            "value": "Дуб, пихта, можжевельник, кедр"
          },
          {
            "key": "Звуки",
            "value": "Колокольчики, калимба"
          }
        ]
      }
    }
  ],
  "error": null
}`;

const timeSlotsJSON = `{
  "data": [
    {
      "id": 1,
      "interval": {
        "begin": "10:00",
        "end": "14:00"
      }
    },
    {
      "id": 2,
      "interval": {
        "begin": "15:00",
        "end": "19:00"
      }
    },
    {
      "id": 3,
      "interval": {
        "begin": "20:00",
        "end": "00:00"
      }
    }
  ],
  "error": null
}`;

const timeSlotsMock = JSON.parse(timeSlotsJSON);
const mockBathes = JSON.parse(mockBath);

const renderElement = (container, component, place = 'beforeend') => {
  container.insertAdjacentHTML(place, component);
};

const calendar = document.querySelector('[data-calendar]');
let flatpickr;
let startX = null;
let endX = null;
let startY = null;
let endY = null;

const onTouchStart = (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;

  document.addEventListener('touchmove', onTouchMove);
};

const getDeltaX = () => {
  return startX - endX;
};

const getDeltaY = () => {
  return startY - endY;
};

const onTouchEnd = (e) => {
  e.preventDefault();

  if (Math.abs(getDeltaX()) < Math.abs(getDeltaY())) {
    return;
  }

  if (getDeltaX() > 0) {
    flatpickr.changeMonth(1);
  } else {
    flatpickr.changeMonth(-1);
  }

  document.removeEventListener('touchmove', onTouchMove);
};

const onTouchMove = (e) => {
  e.preventDefault();

  endX = e.touches[0].clientX;
  endY = e.touches[0].clientY;
};

const initCalendarSwipe = (flatpickrInstance) => {
  if (!calendar) {
    return;
  }

  flatpickr = flatpickrInstance;

  calendar.addEventListener('touchstart', onTouchStart);
  window.addEventListener('touchend', onTouchEnd);
};

const bathCardTemplate = (bath) => {
  return `<div class="bath-option" data-min=${bath.guest.min} data-max=${bath.guest.max} data-guest-min=${bath.guestMin}>
            <input class="visually-hidden" type="radio" value=${bath.id} id=${bath.id} name="bath-choice">
            <label for=${bath.id}>
              <span class="bath-option__wrapper">
                <span class="bath-option__img">
                  <picture>
                    <source type="image/webp" media="(max-width: 767px)" srcset=${bath.cover.mobile.webp}, ${bath.cover.mobile.webp2x} 2x">
                    <source media="(max-width: 767px)" srcset=${bath.cover.mobile.jpg}, ${bath.cover.mobile.jpg2x} 2x">
                    <source type="image/webp" srcset=${bath.cover.desktop.webp}, ${bath.cover.desktop.webp2x} 2x">
                    <img src=${bath.cover.desktop.jpg}" srcset=${bath.cover.desktop.jpg2x} 2x" width="818" height="513" alt=${bath.name}>
                  </picture>
                </span>
                <span class="bath-option__icon">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlink:href="#icon-check"></use>
                  </svg>
                </span>
                <span class="bath-option__title title title--xxs-3">${bath.name}</span>
                <span class="bath-option__row"><span class="bath-option__info">
                  <span class="text text--small">Количество гостей</span>
                  <span class="text text--body-medium-1 text--color-not-opacity">${bath.guest.min} — ${bath.guest.max}</span>
                </span>
                <span class="bath-option__info">
                  <span class="text text--small">Стоимость</span>
                  <span class="text text--body-medium-1 text--color-not-opacity">
                    <span>${bath.price}</span></span>
                  </span>
                </span>
                <span class="bath-option__message">
                  <span class="bath-option__message-date text text--small">Баня недоступна для&nbsp;бронирования
                    <span data-error-date> 15 сентября</span>
                  </span>
                  <span class="bath-option__message-guests text text--small">Баня недоступна для&nbsp;бронирования при&nbsp;указанном количестве гостей</span>
                  <span class="bath-option__message-time text text--small">Баня недоступна для&nbsp;бронирования в&nbsp;указанный временной интервал</span>
                </span>
              </span>
              <a class="link text text--small-caps-3" href="#" data-open-modal="bath">Подробнее о бане</a>
            </label>
          </div>`;
};

const timeSlotTemplate = ({id, interval}) => {
  // return `<button class="time-slot" type="button" data-time="slot" data-time-id=${id}>
  //           <span class="text text--small-caps">${interval.begin} — ${interval.end}</span>
  //         </button>`;
  return `<div class="time-slot" data-time="slot" data-time-id=${id}>
            <input class="visually-hidden" type="radio" value="${interval.begin} — ${interval.end}" id="time-${id}" name="time-choice">
            <label for="time-${id}">
            <span class="text text--small-caps">${interval.begin} — ${interval.end}</span>
            </label>
          </div>`;
};

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.header__btn-reserve');
    if(window.location.pathname === '/booking.html') {
      button.disabled = true;
    }
  });
})();

async function loadBath () {
  try {
    const response = await fetch('./api/objects.json');
      if(!response.ok) {
        throw  new Error (`Ошибка: ${response.status}`);
      } else {
        const data = await response.json();
        console.log(data);
        return data;
      }
    } catch (error) {
      console.error(error);
    };
};

(async function renderBathList () {
  const BathContainer = document.querySelector('.select-bath__wrapper');
  const result  = await loadBath();

  if(!result || !Array.isArray(result.data)) {
    console.warn('Нет данных о банях или неверный формат');
    return;
  };

  const bathes = result.data;
  if (BathContainer) {
    bathes.forEach((bath) => {
      const bathCard = bathCardTemplate(bath);
      renderElement(BathContainer, bathCard);
    })
  };
})();

(function isActiveBath() {
  document.addEventListener('DOMContentLoaded', () => {
    const bathsChoiceis = document.getElementsByName('bath-choice');

    Array.from(bathsChoiceis).forEach((input) => {
      input.checked = false;
      input.disabled = false;
    })
  })
})();

(function getGuestQuantity() {
  document.addEventListener('DOMContentLoaded', () => {
    const decreaseButtonAdults = document.querySelector('div[data-counter-type="adults"] button[data-counter="decrease"]');
    const increaseButtonAdults = document.querySelector('div[data-counter-type="adults"] button[data-counter="increase"]');

    const decreaseButtonChild = document.querySelector('div[data-counter-type="child"] button[data-counter="decrease"]');
    const increaseButtonChild = document.querySelector('div[data-counter-type="child"] button[data-counter="increase"]');

    const decreaseButtonBaby = document.querySelector('div[data-counter-type="baby"] button[data-counter="decrease"]');
    const increaseButtonBaby = document.querySelector('div[data-counter-type="baby"] button[data-counter="increase"]');

    const adultInput = document.querySelector('input[name="adults-qty"]');
    const childInput = document.querySelector('input[name="child-qty"]');
    const babyInput = document.querySelector('input[name="baby-qty"]');

    const adultsWidget = document.querySelector('div[data-widget="adults"] span');
    const childrenWidget = document.querySelector('div[data-widget="child"] span');

    const DEFAULT_VALUE = {
      adults: 1,
      child: 0,
      baby: 0,
    };

    const MIN_VALUE = {
      minAdults: 2,
      minChild: 0,
      minBaby: 0,
    };

    const MAX_VALUE = {
      maxAdults: 10,
      maxChild: 9,
      maxBaby: 4,
    };

    decreaseButtonAdults.disabled = false;
    decreaseButtonChild.disabled = false;
    decreaseButtonBaby.disabled= false;

    adultInput.removeAttribute('readonly');
    childInput.removeAttribute('readonly');
    babyInput.removeAttribute('readonly');

    adultInput.value = DEFAULT_VALUE.adults;
    childInput.value =DEFAULT_VALUE.child;
    babyInput.value = DEFAULT_VALUE.baby;

    const upDate = (widget, value) => {
      widget.textContent = value;
    };

    const setValueDec = (input, min) => {
      let currentValue = parseInt(input.value);

      if (currentValue > min) {
        input.value = currentValue - 1;
      };
      return input.value;
    };

    const setValueInc = (input, max) => {
      let currentValue = parseInt(input.value);

      if(currentValue < max) {
        input.value = currentValue + 1;
      }
      return input.value;
    };

    const CapacityBathMap = {
      Nomad: 4,
      KurnayaIzba: 3,
      Healer:6,
      Olkhon: 6,
      TaigaMin: 5,
      TaigaMax: 10,
      Babies: 4
    }

    const inputsBath = document.getElementsByName('bath-choice');
    const nomadInput = document.getElementById('nomad');
    const kurnayaIzbaInput = document.getElementById('kurnaya-izba');
    const healerInput =  document.getElementById('healer');
    const olkhonInput = document.getElementById('olkhon');
    const taigaInput = document.getElementById('taiga');

    const setNonActiveBath = (bathInput, total, capacity, babyInput) => {
      if (bathInput) {
        bathInput.disabled = total > capacity && babyInput.value < 4;
}
    };

    const setNonActiveBathTaiga = (bathInput, total, capacityMin, capacityMax) => {
      bathInput.disabled = !(total >= capacityMin && total <= capacityMax && babyInput.value >= 4);
    };

    const isValidInput = (value) => {
      const regex = /^\d+$/;

      return regex.test(value);
    };

    const updateBathAvailability = () => {
      const totalCount = Number(adultsWidget.textContent) + Number(childrenWidget.textContent) ;

      setNonActiveBath(nomadInput, totalCount, CapacityBathMap.Nomad);
      setNonActiveBath(kurnayaIzbaInput, totalCount, CapacityBathMap.KurnayaIzba);
      setNonActiveBath(healerInput, totalCount, CapacityBathMap.Healer);
      setNonActiveBath(olkhonInput, totalCount, CapacityBathMap.Olkhon);

      setNonActiveBathTaiga(taigaInput, totalCount, CapacityBathMap.TaigaMin, CapacityBathMap.TaigaMax);
    };


    decreaseButtonAdults.addEventListener('click', () => {
      setValueDec(adultInput ,MIN_VALUE.minAdults );
      upDate(adultsWidget, adultInput.value);
      updateBathAvailability();
    });

    increaseButtonAdults.addEventListener('click', () => {
      setValueInc(adultInput, MAX_VALUE.maxAdults);
      upDate(adultsWidget, adultInput.value);
      updateBathAvailability();
    });

    decreaseButtonChild.addEventListener('click', () => {
      setValueDec(childInput ,MIN_VALUE.minChild);
      upDate(childrenWidget, childInput.value);
      updateBathAvailability();
    });

    increaseButtonChild.addEventListener('click', () => {
      setValueInc(childInput, MAX_VALUE.maxChild);
      upDate(childrenWidget, childInput.value);
      updateBathAvailability();
    });

    decreaseButtonBaby.addEventListener('click', () => {
      setValueDec(babyInput ,MIN_VALUE.minBaby);
      updateBathAvailability();
    });

    increaseButtonBaby.addEventListener('click', () => {
      setValueInc(babyInput, MAX_VALUE.maxBaby);
      updateBathAvailability();
    });

    adultInput.addEventListener('change', (evt) => {
      if(!isValidInput(adultInput.value)) {
        alert('Вводите только цифры');
      } else {
        upDate(childrenWidget, childInput.value);
        updateBathAvailability();
      }

    });

    childInput.addEventListener('change', () => {
      if(!isValidInput(childInput.value)) {

      } else {
        upDate(childrenWidget, childInput.value);
        updateBathAvailability();
      }
    });

    babyInput.addEventListener('change', () => {
      if(!isValidInput(babyInput.value)) {
        alert('Вводите только цифры');
      } else {
        updateBathAvailability();
      }
    })
  });
})();

(function api () {
  let flatpickrInstance = null;
  const limitInit = 30;
  const requestedDates = new Set();

  const getDate = (date) => {
    const yeardateInit = date.getFullYear().toString();
    const mounthdateInit = (date.getMonth() + 1).toString().padStart(2,'0');
    const daydateInit = date.getDate().toString().padStart(2,'0');

    const dateInit = `${yeardateInit}-${mounthdateInit}-${daydateInit}`;
    return dateInit;
  };
  const dateToDay  = new Date();
  const dateToDayParam = getDate(dateToDay);
  // const limit = limitInput ? Number(limitInput) : 30;
  // const limitParam = limit > 60 ? 60 : limit;
  async function getTimesIntervals () {
  try {
    const response = await fetch('/api/times');

    if(!response.ok) {
      throw new Error(`Ошибка ${response.status}`)
    }
    const data = await response.json();
    return data;

    }catch(error){
      console.log(error);
    }
  };

  async function getCalendar () {
    try {
      const response = await fetch(`/api/calendar?start=${dateToDayParam}&limit=${limitInit}`); //GET /api/calendar?start=YYYY-MM-DD&limit=30

      if(!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return data;

    } catch(error) {
      console.error(error);
    }
  };

  async function getDataFromMounth (currentDate) {

    try {
      if(requestedDates.has(currentDate)) {
        return
      } else {
        const response = await fetch (`/api/calendar?start=${currentDate}&limit=${limitInit}`);
        if(!response.ok) {
          throw new Error();
        };

        const result = await response.json();

        const freeDates =  Object
          .entries(result.data)
          .filter(([date, info]) => info.status !== 2)
          .map(([date]) => date);

        const enabledDates = Array.isArray(data) ? data : [];

        flatpickrInstance.set('enable', freeDates);
        requestedDates.add(currentDate);
    }

    } catch(error){
      console.error(error);
    }
};

  window.addEventListener('DOMContentLoaded', async () => {
    const dataCalendarContainer = document.querySelector('.data-calendar');

    const dateToDay  = new Date();
    const inputDateTime = document.getElementById('date-and-time');
    inputDateTime.classList.remove('visually-hidden');

    const calendarResponse = await getCalendar();
    const calendar = calendarResponse.data;

    const freDates = Object
        .entries(calendar)
        .filter(([date, info]) => info.status === 3 )
        .map(([date]) => date);

    const busyDates = Object
        .entries(calendar)
        .filter(([ data, info ]) => info.status === 0 || info.status === 1 || info.status === 2)
        .map(([date]) => date);


    const disableBeforeToday = [{
        from: '1900-01-01',
        to: getDate(dateToDay),
      }];

    const notAvailableDates = [...busyDates, ...disableBeforeToday];
    const availableDates = freDates ? freDates : [];

    const renderCalendar = () => {
      const input = dataCalendarContainer.querySelector('input');
      const nextArrowSvg = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M10 17.5L15 12.5M10 17.5L5 12.5M10 17.5L10 1.66669" stroke="currentColor" stroke-linecap="round"/>  </svg>';
      const prevArrowSvg = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17.5L15 12.5M10 17.5L5 12.5M10 17.5L10 1.66669" stroke="currentColor" stroke-linecap="round"/></svg>';
      let flag = true;

      async function renderTimeSlots () {
        const result = await getTimesIntervals();
        const selectDateContainer = document.querySelector('[data-time="parent"]');

        const isLoadedSlots = result && Array.isArray(result.data) && result.data.length > 0;

        if (isLoadedSlots) {
          const slots = result.data;

          if (selectDateContainer) {
            slots.forEach(({ id, interval }) => {
              const timeSlot = timeSlotTemplate({ id, interval });
              renderElement(selectDateContainer, timeSlot);
            });
          }
        } else {
          console.warn('Нет данных о банях или неверный формат. Используем mock.');
          const slotsMock = timeSlotsMock.data;

          if (selectDateContainer) {
            slotsMock.forEach(({ id, interval }) => {
              const timeSlotMock = timeSlotTemplate({ id, interval });
              renderElement(selectDateContainer, timeSlotMock);
            });
          }
        }
      };


      calendar = flatpickr(input, {
        dateFormat: 'Y-m-d',
        defaultDate: null,
        conjunction: ' - ',
        minDate: 'today',
        maxDate: new Date().fp_incr(maxDays),
        disable: notAvailableDates,
        nextArrow: nextArrowSvg,
        prevArrow: prevArrowSvg,
        inline: true,
        position: 'auto center',
        monthSelectorType: 'static',
        locale: {
          firstDayOfWeek: 1
        },
        onMonthChange: (selectedDates, dateStr, instance) => {
          const selectedDate = selectedDates[0];
          const nextMonth = new Date(instance.currentYear, instance.currentMonth, 1);

          selectDateContainer.innerHTML = '';
          renderTimeSlots();

          initCalendarSwipe(calendar);

          getDataFromMounth(nextMonth);
        },
        onChange: () => {
          if (flag) {
            let activeTime;
            let id;

            if (container.querySelector('input:checked')) {
              activeTime = container.querySelector('input:checked').closest('[data-time="slot"]');
              id = activeTime.dataset.timeId;
            }

            container.innerHTML = '';
            renderTimesSlots();

            if (activeTime && !container.querySelector(`[data-time-id="${id}"]`).hasAttribute('disabled')) {
              container.querySelector(`[data-time-id="${id}"] input`).checked = true;
            }

            flag = false;
          }

          if (!breakpoint.matches) {
            window.accordions.updateAccordionsHeight();
          }
        },
        });


    }

    const initCalendar = () => {
      if(!dataCalendarContainer) {
        return;
      }
      renderCalendar();
    };

    initCalendar();
  });
})();