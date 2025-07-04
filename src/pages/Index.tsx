import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: "Стильная футболка",
      price: 2990,
      image: "/img/e140c8b6-8f0c-4f6f-b542-0ffe16169a62.jpg",
      category: "Футболки",
      isNew: true,
    },
    {
      id: 2,
      name: "Джинсовая куртка",
      price: 8990,
      image: "/img/bda57831-cb63-403e-bb18-da696116872d.jpg",
      category: "Верхняя одежда",
      isNew: false,
    },
    {
      id: 3,
      name: "Элегантное платье",
      price: 6990,
      image: "/img/feed17b8-f8c7-448e-a077-87659d765b4b.jpg",
      category: "Платья",
      isNew: true,
    },
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                StyleHub
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#cart"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Корзина
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="relative">
                <Icon name="ShoppingCart" className="h-4 w-4" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Icon name="User" className="h-4 w-4 mr-2" />
                Вход
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
            Стиль в каждой детали
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Открой мир современной моды с нашей коллекцией стильной одежды и
            аксессуаров
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
            >
              <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              <Icon name="Sparkles" className="mr-2 h-5 w-5" />
              Новинки
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Популярные товары
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые востребованные позиции нашего каталога
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/60 backdrop-blur-sm border-0 shadow-lg"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-blue-500 text-white">
                        NEW
                      </Badge>
                    )}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/80 backdrop-blur-sm"
                      >
                        <Icon name="Heart" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600 mb-4">
                    Высокое качество и современный дизайн
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">
                      {product.price.toLocaleString()} ₽
                    </span>
                    <Button
                      onClick={addToCart}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />В
                      корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section id="cart" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Ваша корзина
            </h3>
            <p className="text-gray-600">
              {cartCount > 0
                ? `В корзине ${cartCount} товаров`
                : "Корзина пуста"}
            </p>
          </div>

          {cartCount > 0 ? (
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-medium">
                      Товары в корзине:
                    </span>
                    <Badge className="bg-purple-100 text-purple-800">
                      {cartCount} шт.
                    </Badge>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span>Стоимость товаров:</span>
                      <span>{(cartCount * 2990).toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка:</span>
                      <span>Бесплатно</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold text-lg">
                      <span>Итого:</span>
                      <span className="text-purple-600">
                        {(cartCount * 2990).toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Icon name="CreditCard" className="mr-2 h-4 w-4" />
                    Оформить заказ
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon
                name="ShoppingCart"
                className="h-16 w-16 text-gray-400 mx-auto mb-4"
              />
              <p className="text-gray-500 mb-6">Добавьте товары в корзину</p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Перейти к покупкам
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Контакты</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <Icon
                  name="Phone"
                  className="h-8 w-8 text-purple-600 mx-auto mb-4"
                />
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-gray-600">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <Icon
                  name="Mail"
                  className="h-8 w-8 text-purple-600 mx-auto mb-4"
                />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-600">info@stylehub.ru</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <Icon
                  name="MapPin"
                  className="h-8 w-8 text-purple-600 mx-auto mb-4"
                />
                <h4 className="font-semibold mb-2">Адрес</h4>
                <p className="text-gray-600">г. Москва, ул. Модная, 15</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sparkles" className="h-6 w-6 text-purple-400" />
                <h4 className="text-lg font-bold">StyleHub</h4>
              </div>
              <p className="text-gray-400">
                Современная мода и стиль для каждого
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Женская одежда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Мужская одежда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Аксессуары
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Обувь
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Помощь</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Размеры
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-white"
                >
                  <Icon name="Instagram" className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-white"
                >
                  <Icon name="Facebook" className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-white"
                >
                  <Icon name="Twitter" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StyleHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
